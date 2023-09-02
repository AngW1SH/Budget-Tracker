import express from "express";
import { prismaApp as prisma } from "../../prisma-client";
import passport from "../../passport";
import { getDayByDate } from "../../utils/getDayByDate";

const transactionRouter = express.Router();

transactionRouter.get(
  "/byday/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      if (!req.params.date) return res.status(400).send();

      const day = await getDayByDate(new Date(req.params.date), req.user.id);

      if (!day) return res.status(501).send();

      const categories = await prisma.transaction.findMany({
        where: {
          dayId: day.id,
          userId: req.user.id,
        },
        select: {
          id: true,
          category: {
            select: {
              id: true,
              name: true,
            },
          },
          subcategory: true,
          value: true,
          description: true,
        },
      });

      /*
        This can be where inactive days are deleted
        */

      res.status(200).send(categories);
    } catch {
      res.status(500).send();
    }
  }
);

transactionRouter.get(
  "/addempty/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      if (!req.params.date) return res.status(400).send();

      const day = await getDayByDate(new Date(req.params.date), req.user.id);

      if (!day) return res.status(501).send();

      const transaction = await prisma.transaction.create({
        data: {
          subcategory: "",
          value: 0,
          dayId: day.id,
          userId: req.user.id,
        },
        select: {
          id: true,
          category: {
            select: {
              id: true,
              name: true,
            },
          },
          day: {
            select: {
              id: true,
            },
          },
          subcategory: true,
          value: true,
          description: true,
        },
      });

      /* 
        The 'await' here can hurt performance, but 
        ensures that getDayByDate always works as expected
        */
      const setDayActive = await prisma.day.update({
        where: {
          id: transaction.day.id,
        },
        data: {
          active: true,
        },
      });

      res.status(200).send(transaction);
    } catch {
      res.status(500).send();
    }
  }
);

transactionRouter.get(
  "/delete/:id",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      const deleted = await prisma.transaction.delete({
        where: {
          id: req.params.id,
          userId: req.user.id,
        },
      });

      const count = await prisma.transaction.count({
        where: {
          dayId: deleted.dayId,
        },
      });

      if (!count) {
        const updatedDay = await prisma.day.update({
          where: {
            id: deleted.dayId,
          },
          data: {
            active: false,
          },
        });
      }

      res.status(200).send();
    } catch {
      res.status(500).send();
    }
  }
);

transactionRouter.post(
  "/edit",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      if (!req.body.transaction) return res.status(400).send();

      const edited = await prisma.transaction.update({
        where: {
          id: req.body.transaction.id,
          userId: req.user.id,
        },
        data: {
          ...req.body.transaction,
          category: undefined,
          categoryId: req.body.transaction.category.id,
        },
      });

      res.status(200).send();
    } catch {
      res.status(500).send();
    }
  }
);

export default transactionRouter;
