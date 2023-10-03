import { PrismaClient as PrismaClientApp } from "./app/client";
import { PrismaClient as PrismaClientAuth } from "./auth/client";

export const prismaApp = new PrismaClientApp();
export const prismaAuth = new PrismaClientAuth();
