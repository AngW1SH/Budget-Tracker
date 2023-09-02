import express from "express";
import { prismaApp as prisma } from "../../prisma-client";
import passport from "../../passport";
import { getDayByDate } from "../../utils/getDayByDate";

const categoryRouter = express.Router();

categoryRouter.get(
  "/all",
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

export default categoryRouter;
