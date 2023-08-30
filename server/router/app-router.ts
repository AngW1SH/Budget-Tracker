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
});

appRouter.get("/insertemptycategoryinday", async (req, res) => {
  try {
    const category = await prisma.categoryInDay.create({
      data: {
        subcategory: "",
        value: 0,
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

    res.status(200).send(category);
  } catch {
    res.status(500).send();
  }
});

appRouter.get("/deletecategoryinday/:id", async (req, res) => {
  try {
    const deleted = await prisma.categoryInDay.delete({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).send();
  } catch {
    res.status(500).send();
  }
});

appRouter.post("/editcategoryinday", async (req, res) => {
  try {
    if (!req.body.categoryInDay) return res.status(400).send();

    const edited = await prisma.categoryInDay.update({
      where: {
        id: req.body.categoryInDay.id,
      },
      data: {
        ...req.body.categoryInDay,
        category: undefined,
        categoryId: req.body.categoryInDay.category.id,
      },
    });

    res.status(200).send();
  } catch {
    res.status(500).send();
  }
});

appRouter.get("/categories", async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        userid: true,
      },
    });

    res.status(200).send(categories);
  } catch {
    res.status(500).send();
  }
});

export default appRouter;
