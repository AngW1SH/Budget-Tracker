import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "../../passport/index";

import path from "path";

import userRouter from "../../router/auth/user-router";
import categoryRouter from "@/routes/category";
import dayRouter from "@/routes/day";
import monthRouter from "@/routes/month";
import transactionRouter from "@/routes/transaction";
import categoryInMonthRouter from "@/routes/categoryInMonth";
import errorLogger from "@/middleware/errors/ErrorLogger";
import errorHandler from "@/middleware/errors/ErrorHandler";

const generateApp = (port?: number) => {
  const app = express();
  if (port) app.listen(port, () => console.log("listening port " + port));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser("secret"));
  app.use(
    session({
      secret: "12",
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/api/user", userRouter);
  app.use("/api/category", categoryRouter);
  app.use("/api/day", dayRouter);
  app.use("/api/month", monthRouter);
  app.use("/api/transaction", transactionRouter);
  app.use("/api/categoryinmonth", categoryInMonthRouter);

  app.use("/public", express.static(path.resolve(__dirname + "/../public")));

  app.get("/", (req: Request, res: Response) => {
    res
      .status(200)
      .sendFile(path.resolve(__dirname + "/../client/dist/index.html"));
  });

  app.use(
    "/assets",
    express.static(path.resolve(__dirname + "/../client/dist/assets"))
  );

  app.use(errorLogger);
  app.use(errorHandler);

  return app;
};

export default generateApp;
