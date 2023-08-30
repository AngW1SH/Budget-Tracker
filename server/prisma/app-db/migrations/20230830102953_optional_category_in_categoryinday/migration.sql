-- DropForeignKey
ALTER TABLE "CategoryInDay" DROP CONSTRAINT "CategoryInDay_categoryId_fkey";

-- AlterTable
ALTER TABLE "CategoryInDay" ALTER COLUMN "categoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CategoryInDay" ADD CONSTRAINT "CategoryInDay_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
