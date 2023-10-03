import express from "express";
import passport from "@/../passport";
import monthController from "@/controllers/month";

const monthRouter = express();

monthRouter.get(
  "/getdata/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  monthController.getOne
);

monthRouter.get(
  "/createifnotexists/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  monthController.createIfNotExists
);

monthRouter.post(
  "/edit",
  passport.authenticate("jwt-authenticate", { session: false }),
  monthController.edit
);

export default monthRouter;
