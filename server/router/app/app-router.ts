import express from "express";
import { prismaApp as prisma } from "../../prisma-client";
import passport from "../../passport";
import categoryRouter from "./category-router";
import dayRouter from "./day-router";
import transactionRouter from "./transaction-router";
import monthRouter from "./month-router";
import categoryInMonthRouter from "./category-in-month-router";

const appRouter = express.Router();

appRouter.use("/category/", categoryRouter);
appRouter.use("/day/", dayRouter);
appRouter.use("/month", monthRouter);
appRouter.use("/transaction/", transactionRouter);
appRouter.use("/categoryinmonth/", categoryInMonthRouter);

export default appRouter;
