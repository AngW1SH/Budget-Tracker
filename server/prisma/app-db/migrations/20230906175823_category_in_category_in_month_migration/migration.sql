-- AlterTable
ALTER TABLE "CategoryInMonth" ADD COLUMN     "categoryId" TEXT;

-- AddForeignKey
ALTER TABLE "CategoryInMonth" ADD CONSTRAINT "CategoryInMonth_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
