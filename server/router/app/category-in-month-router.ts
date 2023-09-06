import express from "express";
import { prismaApp as prisma } from "../../prisma-client";
import passport from "../../passport";
import { getMonthByDate } from "../../utils/getMonthByDate";

const categoryInMonthRouter = express.Router();

categoryInMonthRouter.get(
  "/bymonth/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      if (!req.params.date) return res.status(400).send();

      const month = await getMonthByDate(
        new Date(req.params.date),
        req.user.id
      );

      if (!month) return res.status(501).send();

      const categories = await prisma.categoryInMonth.findMany({
        where: {
          monthId: month.id,
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
          goal: true,
          spent: true,
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

categoryInMonthRouter.get(
  "/addempty/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      if (!req.params.date) return res.status(400).send();

      const month = await getMonthByDate(
        new Date(req.params.date),
        req.user.id
      );

      if (!month) return res.status(501).send();

      const category = await prisma.categoryInMonth.create({
        data: {
          goal: 0,
          spent: 0,
          description: "",
          monthId: month.id,
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
          goal: true,
          spent: true,
          description: true,
        },
      });

      res.status(200).send(category);
    } catch {
      res.status(500).send();
    }
  }
);

categoryInMonthRouter.get(
  "/delete/:id",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      const deleted = await prisma.categoryInMonth.delete({
        where: {
          id: req.params.id,
          userId: req.user.id,
        },
      });

      res.status(200).send();
    } catch {
      res.status(500).send();
    }
  }
);

categoryInMonthRouter.post(
  "/edit",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      if (!req.body.categoryInMonth) return res.status(400).send();

      const edited = await prisma.categoryInMonth.update({
        where: {
          id: req.body.categoryInMonth.id,
          userId: req.user.id,
        },
        data: {
          ...req.body.categoryInMonth,
          category: undefined,
          categoryId: req.body.transaction.category.id,
          month: undefined,
          monthId: undefined,
        },
      });

      res.status(200).send();
    } catch {
      res.status(500).send();
    }
  }
);

export default categoryInMonthRouter;
