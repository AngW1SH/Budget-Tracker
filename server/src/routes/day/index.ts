import express from "express";
import passport from "@/../passport";
import dayController from "@/controllers/day";

const dayRouter = express();

dayRouter.get(
  "/createifnotexists/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  dayController.createIfNotExists
);

dayRouter.get(
  "/bymonth/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  dayController.getByMonth
);

export default dayRouter;
