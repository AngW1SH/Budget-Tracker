import transactionService from "@/services/transaction";
import { NextFunction, Request, Response } from "express";

const transactionControllerFactory = () => {
  return Object.freeze({
    getByDate,
    addEmpty,
    deleteById,
    edit,
  });

  async function getByDate(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.params.date) return res.status(400).send();

      const transactions = await transactionService.getByDate(
        new Date(req.params.date),
        req.user.id
      );

      if (!transactions) return res.status(501).send();

      res.status(200).send(transactions);
    } catch (err) {
      next(err);
    }
  }

  async function addEmpty(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.params.date) return res.status(400).send();

      const transaction = await transactionService.addEmpty(
        new Date(req.params.date),
        req.user.id
      );

      if (!transaction) return res.status(501).send();

      res.status(200).send({ ...transaction, day: undefined });
    } catch (err) {
      next(err);
    }
  }

  async function deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.params.id) return res.status(400).send();

      const deleted = await transactionService.deleteById(
        req.params.id,
        req.user.id
      );

      res.status(200).send(deleted);
    } catch (err) {
      next(err);
    }
  }

  async function edit(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.body.transaction) return res.status(400).send();

      const edited = transactionService.edit(req.body.transaction, req.user.id);

      res.status(200).send(edited);
    } catch (err) {
      next(err);
    }
  }
};

const transactionController = transactionControllerFactory();

export default transactionController;
