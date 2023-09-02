import express from "express";
import { prismaApp as prisma } from "../../prisma-client";
import passport from "../../passport";
import categoryRouter from "./category-router";
import dayRouter from "./day-router";
import transactionRouter from "./transaction-router";

const appRouter = express.Router();

appRouter.use("/category/", categoryRouter);
appRouter.use("/day/", dayRouter);
appRouter.use("/transaction/", transactionRouter);

export default appRouter;
