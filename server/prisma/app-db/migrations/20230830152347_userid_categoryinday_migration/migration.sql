/*
  Warnings:

  - Added the required column `userId` to the `CategoryInDay` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CategoryInDay" ADD COLUMN     "userId" TEXT NOT NULL;
