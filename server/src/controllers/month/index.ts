import monthService from "@/services/month";
import { NextFunction, Request, Response } from "express";

const monthControllerFactory = () => {
  return Object.freeze({
    getOne,
    createIfNotExists,
    edit,
  });

  async function getOne(req: Request, res: Response) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.params.date) return res.status(400).send();

      const month = await monthService.getByDate(
        new Date(req.params.date),
        req.user.id
      );

      res.status(200).send(month);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async function createIfNotExists(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.params.date) return res.status(400).send();

      const day = await monthService.createIfNotExists(
        new Date(req.params.date),
        req.user.id
      );

      res.status(200).send(day);
    } catch (err) {
      next(err);
    }
  }

  async function edit(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.body.month) return res.status(400).send();

      const edited = await monthService.edit(req.body.month, req.user.id);

      res.status(200).send(edited);
    } catch (err) {
      next(err);
    }
  }
};

const monthController = monthControllerFactory();

export default monthController;
