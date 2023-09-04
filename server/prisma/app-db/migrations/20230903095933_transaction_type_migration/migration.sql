-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'expense';

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'expense';
