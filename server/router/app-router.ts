import express from "express";
import { prismaApp as prisma } from "../prisma-client";

const appRouter = express.Router();

appRouter.get("/categoriesinday", async (req, res) => {
  try {
    const categories = await prisma.categoryInDay.findMany({
      select: {
        id: true,
        category: {
          select: {
            name: true,
          },
        },
        subcategory: true,
        value: true,
      },
    });

    res.status(200).send(categories);
  } catch {
    res.status(500).send();
  }
});

export default appRouter;
