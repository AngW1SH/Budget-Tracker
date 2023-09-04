import express from "express";
import { prismaAuth as prisma } from "../../prisma-client";
import { prismaApp } from "../../prisma-client";
import crypto from "node:crypto";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import jwt, { JwtPayload } from "jsonwebtoken";

import passport from "../../passport";
import { generateAccessToken, generateRefreshToken } from "../../jwt";

const generateDefaultCategories = async (userId: string) => {
  const expense = ["Food", "Gas & Fuel", "Health"];

  const income = ["Salary"];

  await prismaApp.category.createMany({
    data: expense.map((name) => ({
      name: name,
      userId: userId,
      type: "expense",
    })),
  });

  await prismaApp.category.createMany({
    data: income.map((name) => ({
      name: name,
      userId: userId,
      type: "income",
    })),
  });
};

const userRouter = express.Router();

userRouter.get(
  "/authenticate",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    return res.status(200).send({
      name: req.user.username,
      email: req.user.email,
    });
  }
);

userRouter.get("/confirmemail/:token", async (req, res) => {
  const userid_token = await prisma.userEmailConfirm.findFirst({
    where: {
      token: req.params.token,
    },
  });

  if (userid_token && userid_token.userid) {
    const user = await prisma.user.update({
      where: {
        id: userid_token.userid,
      },
      data: {
        active: true,
      },
    });

    generateDefaultCategories(userid_token.userid);
  }

  return res.redirect("/login");
});

userRouter.get("/unauthorize", async (req, res) => {
  try {
    res.cookie("passportauth-access", null, {
      maxAge: 0,
      httpOnly: true,
      signed: true,
    });
    res.cookie("passportauth-refresh", null, {
      maxAge: 0,
      httpOnly: true,
      signed: true,
    });
    res.status(200).send();
  } catch (err) {
    res.status(500).send();
  }
});

const sendConfirmationEmail = async (email: string, token: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "yandex",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.MAIL_USER + "@yandex.ru",
      to: email,
      subject: "Passport Auth | Email Confirmation",
      text: "http://localhost:5173/api/user/confirmemail/" + token,
    });

    return info;
  } catch (err) {
    return err;
  }
};

const sendResetPasswordEmail = async (email: string, token: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "yandex",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.MAIL_USER + "@yandex.ru",
      to: email,
      subject: "Passport Auth | Reset Password",
      text: "http://localhost:5173/resetpassword/" + token,
    });

    return info;
  } catch (err) {
    return err;
  }
};

userRouter.post("/register", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.username) {
      res.status(400).send();
      return;
    }

    const doesUserExist = await prisma.user.findFirst({
      where: {
        email: req.body.email,
        active: true,
      },
    });

    if (doesUserExist === null) {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
          const deleteInactiveDuplicates = await prisma.user.deleteMany({
            where: {
              email: req.body.email,
              active: false,
            },
          });
          const user = await prisma.user.create({
            data: {
              email: req.body.email,
              username: req.body.username,
              password: hashedPassword,
            },
          });
          const token = crypto.randomBytes(128).toString("hex");

          const deletePrevTokens = await prisma.userEmailConfirm.deleteMany({
            where: {
              userid: user.id,
            },
          });
          const createNewToken = await prisma.userEmailConfirm.create({
            data: {
              userid: user.id,
              token: token,
            },
          });

          await sendConfirmationEmail(user.email, token);
          res.status(200).send();
          return;
        });
      });
    } else {
      res.status(401).send();
      return;
    }
  } catch (error) {
    res.status(500).send();
    return;
  }
});

userRouter.post("/forgotpassword", async (req, res) => {
  try {
    if (!req.body.email) {
      res.status(400).send();
      return;
    }

    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });

    if (user) {
      const token = crypto.randomBytes(128).toString("hex");

      const deletePrevTokens = await prisma.userResetPassword.deleteMany({
        where: {
          userid: user.id,
        },
      });

      const createNewToken = await prisma.userResetPassword.create({
        data: {
          userid: user.id,
          token: token,
        },
      });

      await sendResetPasswordEmail(user.email, token);

      res.status(200).send();
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).send();
  }
});

userRouter.post("/resetpassword", async (req, res) => {
  try {
    if (!req.body.token || !req.body.password) {
      res.status(400).send();
      return;
    }

    const userid_token = await prisma.userResetPassword.findFirst({
      where: {
        token: req.body.token,
      },
    });

    if (userid_token && userid_token.userid) {
      const deleteToken = await prisma.userResetPassword.deleteMany({
        where: {
          userid: userid_token.userid,
        },
      });

      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
          const user = await prisma.user.update({
            where: {
              id: userid_token.userid,
            },
            data: {
              password: hashedPassword,
            },
          });
        });
      });
    }
    return res.status(200).send();
  } catch {
    res.status(500).send();
  }
});

userRouter.get("/token", async (req, res) => {
  jwt.verify(
    req.signedCookies["passportauth-refresh"],
    process.env.TOKEN_SECRET!,
    async (
      err: jwt.VerifyErrors | null,
      decoded: jwt.Jwt | JwtPayload | string | undefined
    ) => {
      if (err) {
        res.status(401).send();
      } else {
        const doesUserExist = await prisma.user.findFirst({
          where: {
            email: req.body.email,
            refresh: req.signedCookies["passportauth-refresh"],
          },
        });
        if (doesUserExist) {
          const newToken = generateAccessToken(doesUserExist.id);
          res.clearCookie("passportauth-access");
          res.cookie("passportauth-access", newToken, {
            maxAge: 1000 * 60 * 60 * 24, // would expire after 15 minutes
            httpOnly: true,
            signed: true,
          });
          return res.status(205).send();
        } else {
          res.clearCookie("passportauth-access");
          res.clearCookie("passportauth-refresh");
          return res.status(401).send();
        }
      }
    }
  );
});

userRouter.get(
  "/terminatesessions",
  passport.authenticate("jwt-authenticate", { session: false }),
  async (req, res) => {
    try {
      if (req.user) {
        const result = await prisma.user.update({
          where: {
            id: req.user.id,
          },
          data: {
            refresh: "",
          },
        });
        res.clearCookie("passportauth-access");
        res.clearCookie("passportauth-refresh");
        res.status(200).send();
      }
    } catch {
      res.status(500).send();
    }
  }
);

userRouter.post(
  "/login",
  passport.authenticate("local-login"),
  async (req, res) => {
    if (req.user) {
      res.cookie("passportauth-access", generateAccessToken(req.user.id), {
        maxAge: 1000 * 60 * 60 * 24, // would expire after 15 minutes
        httpOnly: true,
        signed: true,
      });

      const user = await prisma.user.findFirst({
        where: {
          id: req.user.id,
        },
      });

      if (user) {
        if (req.body.rememberMe) {
          const refreshToken = generateRefreshToken(req.user.id);

          res.cookie("passportauth-refresh", refreshToken, {
            maxAge: 1000 * 60 * 60 * 24, // would expire after 15 minutes
            httpOnly: true,
            signed: true,
          });

          const result = await prisma.user.update({
            where: {
              id: req.user.id,
            },
            data: {
              refresh: refreshToken,
            },
          });
        }
      }
      res.status(200).send();
    } else {
      res.status(404).send();
    }
    res.status(401).send();
  }
);

export default userRouter;
