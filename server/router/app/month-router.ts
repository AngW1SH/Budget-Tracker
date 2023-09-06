import express from "express";
import { prismaApp as prisma } from "../../prisma-client";
import passport from "../../passport";
import { getMonthByDate } from "../../utils/getMonthByDate";

const monthRouter = express.Router();

monthRouter.get(
  "/createifnotexists/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      if (!req.params.date) return res.status(400).send();

      const day = await getMonthByDate(new Date(req.params.date), req.user.id);

      if (day) return res.status(200).send();

      const created = await prisma.month.create({
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

export default monthRouter;
