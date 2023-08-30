/*
  Warnings:

  - Added the required column `dayId` to the `CategoryInDay` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CategoryInDay" ADD COLUMN     "dayId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Day" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Day_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoryInDay" ADD CONSTRAINT "CategoryInDay_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "Day"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
