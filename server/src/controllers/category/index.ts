import categoryService from "@/services/category";
import { Request, Response } from "express";

const categoryControllerFactory = () => {
  return Object.freeze({ getAll });

  async function getAll(req: Request, res: Response) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();

      const categories = await categoryService.getAll(req.user.id);

      res.status(200).send(categories);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

const categoryController = categoryControllerFactory();

export default categoryController;
