import express from "express";
import { prismaApp as prisma } from "../prisma-client";
import passport from "../passport";

const appRouter = express.Router();

const getDayByDate = async (date: Date, userId: string) => {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);

  const day = await prisma.day.findFirst({
    where: {
      date: {
        gte: date,
        lt: nextDate,
      },
      userId: userId,
    },
  });

  return day;
};

appRouter.get(
  "/createdayifnotexists/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      if (!req.params.date) return res.status(400).send();

      const day = await getDayByDate(new Date(req.params.date), req.user.id);

      if (day) return res.status(200).send();

      const created = await prisma.day.create({
        data: {
          date: new Date(req.params.date),
          userId: req.user.id,
        },
      });

      res.status(200).send();
    } catch {
      res.status(500).send();
    }
  }
);

appRouter.get(
  "/transactions/:date",
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

appRouter.get(
  "/insertemptyTransaction/:date",
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

appRouter.get(
  "/deleteTransaction/:id",
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

appRouter.post(
  "/editTransaction",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      if (!req.body.Transaction) return res.status(400).send();

      const edited = await prisma.transaction.update({
        where: {
          id: req.body.Transaction.id,
          userId: req.user.id,
        },
        data: {
          ...req.body.Transaction,
          category: undefined,
          categoryId: req.body.Transaction.category.id,
          day: undefined,
          dayId: req.body.Transaction.day.id,
        },
      });

      res.status(200).send();
    } catch {
      res.status(500).send();
    }
  }
);

appRouter.get(
  "/categories",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      const categories = await prisma.category.findMany({
        where: {
          userId: req.user.id,
        },
        select: {
          id: true,
          name: true,
          userId: true,
        },
      });

      res.status(200).send(categories);
    } catch {
      res.status(500).send();
    }
  }
);

appRouter.get(
  "/monthdays/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      if (!req.params.date) return res.status(400).send();

      const date = new Date(req.params.date);

      const firstDayOfCurrentMonth = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
      );

      const firstDayOfFollowingMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        1
      );

      const days = await prisma.day.findMany({
        where: {
          userId: req.user.id,
          active: true,
          date: {
            gte: firstDayOfCurrentMonth,
            lt: firstDayOfFollowingMonth,
          },
        },
        select: {
          id: true,
          date: true,
        },
      });

      return res.status(200).send(days);
    } catch {
      res.status(500).send();
    }
  }
);

export default appRouter;
