import express from "express";
import passport from "@/../passport";
import categoryInMonthController from "@/controllers/categoryInMonth";

const categoryInMonthRouter = express();

categoryInMonthRouter.get(
  "/bymonth/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  categoryInMonthController.getByMonth
);

categoryInMonthRouter.get(
  "/addempty/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  categoryInMonthController.addEmpty
);

categoryInMonthRouter.get(
  "/delete/:id",
  passport.authenticate("jwt-authenticate", { session: false }),
  categoryInMonthController.deleteById
);

categoryInMonthRouter.post(
  "/edit",
  passport.authenticate("jwt-authenticate", { session: false }),
  categoryInMonthController.edit
);

export default categoryInMonthRouter;
