import { PrismaClient as PrismaClientApp } from "./prisma/app-db/client";
import { PrismaClient as PrismaClientAuth } from "./prisma/auth-db/client";

export const prismaApp = new PrismaClientApp();
export const prismaAuth = new PrismaClientAuth();
