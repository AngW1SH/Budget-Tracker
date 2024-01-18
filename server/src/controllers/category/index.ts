import { BadRequestError, UnauthorizedError } from "@/helpers/errors";
import categoryService from "@/services/category";
import { NextFunction, Request, Response } from "express";

const categoryControllerFactory = () => {
  return Object.freeze({ getAll, add, edit, remove });

  async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();

      const categories = await categoryService.getAll(req.user.id);

      res.status(200).send(categories);
    } catch (err) {
      next(err);
    }
  }

  async function add(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user || !req.user.id)
        throw new UnauthorizedError("User is not authenticated");

      const result = await categoryService.add(req.user.id);

      res.status(200).send(result);
    } catch (err) {
      next(err);
    }
  }

  async function edit(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user || !req.user.id)
        throw new UnauthorizedError("User is not authenticated");
      if (!req.body.category)
        throw new BadRequestError("Missing required parameter: category");
      const result = await categoryService.edit(req.body.category, req.user.id);
      res.status(200).send(result);
    } catch (err) {
      next(err);
    }
  }

  async function remove(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user || !req.user.id)
        throw new UnauthorizedError("User is not authenticated");
      if (!req.params.category)
        throw new BadRequestError("Missing required parameter: category");

      const result = await categoryService.remove(
        req.params.category,
        req.user.id
      );
      res.status(200).send(result);
    } catch (err) {
      next(err);
    }
  }
};

const categoryController = categoryControllerFactory();

export default categoryController;
