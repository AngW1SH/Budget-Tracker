import categoryService from "@/services/category";
import { NextFunction, Request, Response } from "express";

const categoryControllerFactory = () => {
  return Object.freeze({ getAll });

  async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();

      const categories = await categoryService.getAll(req.user.id);

      res.status(200).send(categories);
    } catch (err) {
      next(err);
    }
  }
};

const categoryController = categoryControllerFactory();

export default categoryController;
