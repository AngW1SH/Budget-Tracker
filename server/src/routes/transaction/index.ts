import express from "express";
import passport from "@/../passport";
import transactionController from "@/controllers/transaction";

const transactionRouter = express();

transactionRouter.get(
  "/byday/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  transactionController.getByDate
);

transactionRouter.get(
  "/addempty/:date",
  passport.authenticate("jwt-authenticate", { session: false }),
  transactionController.addEmpty
);

transactionRouter.get(
  "/delete/:id",
  passport.authenticate("jwt-authenticate", { session: false }),
  transactionController.deleteById
);

transactionRouter.post(
  "/edit",
  passport.authenticate("jwt-authenticate", { session: false }),
  transactionController.edit
);

export default transactionRouter;
