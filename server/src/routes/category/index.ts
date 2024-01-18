import categoryController from "@/controllers/category";
import express from "express";
import passport from "@/../passport";

const categoryRouter = express();

categoryRouter.get(
  "/all",
  passport.authenticate("jwt-authenticate", { session: false }),
  categoryController.getAll
);

categoryRouter.post(
  "/add",
  passport.authenticate("jwt-authenticate", { session: false }),
  categoryController.add
);

categoryRouter.put(
  "/edit",
  passport.authenticate("jwt-authenticate", { session: false }),
  categoryController.edit
);

categoryRouter.delete(
  "/delete/:category",
  passport.authenticate("jwt-authenticate", { session: false }),
  categoryController.remove
);

export default categoryRouter;
