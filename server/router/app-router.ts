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
  "/categoriesinday/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      if (!req.params.date) return res.status(400).send();

      const day = await getDayByDate(new Date(req.params.date), req.user.id);

      if (!day) return res.status(501).send();

      const categories = await prisma.categoryInDay.findMany({
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

      res.status(200).send(categories);
    } catch {
      res.status(500).send();
    }
  }
);

appRouter.get(
  "/insertemptycategoryinday/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      if (!req.params.date) return res.status(400).send();

      const day = await getDayByDate(new Date(req.params.date), req.user.id);

      if (!day) return res.status(501).send();

      const category = await prisma.categoryInDay.create({
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

      res.status(200).send(category);
    } catch {
      res.status(500).send();
    }
  }
);

appRouter.get(
  "/deletecategoryinday/:id",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      const deleted = await prisma.categoryInDay.delete({
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

appRouter.post(
  "/editcategoryinday",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      if (!req.body.categoryInDay) return res.status(400).send();

      const edited = await prisma.categoryInDay.update({
        where: {
          id: req.body.categoryInDay.id,
          userId: req.user.id,
        },
        data: {
          ...req.body.categoryInDay,
          category: undefined,
          categoryId: req.body.categoryInDay.category.id,
          day: undefined,
          dayId: req.body.categoryInDay.day.id,
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

export default appRouter;
