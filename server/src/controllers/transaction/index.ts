import transactionService from "@/services/transaction";
import { Request, Response } from "express";

const transactionControllerFactory = () => {
  return Object.freeze({
    getByDate,
    addEmpty,
    deleteById,
    edit,
  });

  async function getByDate(req: Request, res: Response) {
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
      res.status(500).send();
    }
  }

  async function addEmpty(req: Request, res: Response) {
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
      res.status(500).send(err);
    }
  }

  async function deleteById(req: Request, res: Response) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.params.id) return res.status(400).send();

      const deleted = await transactionService.deleteById(
        req.params.id,
        req.user.id
      );

      res.status(200).send(deleted);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async function edit(req: Request, res: Response) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.body.transaction) return res.status(400).send();

      const edited = transactionService.edit(req.body.transaction, req.user.id);

      res.status(200).send(edited);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

const transactionController = transactionControllerFactory();

export default transactionController;
