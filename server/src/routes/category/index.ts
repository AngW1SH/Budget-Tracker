import categoryController from "@/controllers/category";
import express from "express";
import passport from "@/../passport";

const categoryRouter = express();

categoryRouter.get(
  "/all",
  passport.authenticate("jwt-authenticate", { session: false }),
  categoryController.getAll
);

export default categoryRouter;
