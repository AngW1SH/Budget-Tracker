import express from "express";
import { prismaApp as prisma } from "../../prisma-client";
import passport from "../../passport";
import { getDayByDate } from "../../utils/getDayByDate";

const dayRouter = express.Router();

dayRouter.get(
  "/createifnotexists/:date",
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

dayRouter.get(
  "/bymonth/:date",
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

export default dayRouter;
