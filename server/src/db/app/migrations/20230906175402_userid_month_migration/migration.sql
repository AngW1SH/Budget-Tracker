/*
  Warnings:

  - Added the required column `userId` to the `Month` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Month" ADD COLUMN     "userId" TEXT NOT NULL;
