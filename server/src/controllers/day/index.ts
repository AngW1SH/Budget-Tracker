import dayService from "@/services/day";
import { NextFunction, Request, Response } from "express";

const dayControllerFactory = () => {
  return Object.freeze({
    createIfNotExists,
    getByMonth,
  });

  async function createIfNotExists(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.params.date) return res.status(400).send();

      const day = await dayService.createIfNotExists(
        new Date(req.params.date),
        req.user.id
      );

      res.status(200).send(day);
    } catch (err) {
      next(err);
    }
  }

  async function getByMonth(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.params.date) return res.status(400).send();

      const days = await dayService.getByMonth(
        new Date(req.params.date),
        req.user.id
      );

      res.status(200).send(days);
    } catch (err) {
      next(err);
    }
  }
};

const dayController = dayControllerFactory();

export default dayController;
