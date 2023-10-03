import categoryInMonthService from "@/services/categoryInMonth";
import { Request, Response } from "express";

const categoryInMonthControllerFactory = () => {
  return Object.freeze({
    getByMonth,
    addEmpty,
    deleteById,
    edit,
  });

  async function getByMonth(req: Request, res: Response) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.params.date) return res.status(400).send();

      const categories = await categoryInMonthService.getByMonth(
        new Date(req.params.date),
        req.user.id
      );

      res.status(200).send(categories);
    } catch (err) {
      res.status(500).send();
    }
  }

  async function addEmpty(req: Request, res: Response) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.params.date) return res.status(400).send();

      const category = await categoryInMonthService.addEmpty(
        new Date(req.params.date),
        req.user.id
      );

      if (!category) return res.status(501).send();

      res.status(200).send(category);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async function deleteById(req: Request, res: Response) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.params.id) return res.status(400).send();

      const deleted = await categoryInMonthService.deleteById(
        req.params.id,
        req.user.id
      );

      res.status(200).send();
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async function edit(req: Request, res: Response) {
    try {
      if (!req.user || !req.user.id) return res.status(401).send();
      if (!req.body.categoryInMonth) return res.status(400).send();

      const edited = await categoryInMonthService.edit(
        req.body.categoryInMonth,
        req.user.id
      );

      res.status(200).send();
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

const categoryInMonthController = categoryInMonthControllerFactory();

export default categoryInMonthController;
