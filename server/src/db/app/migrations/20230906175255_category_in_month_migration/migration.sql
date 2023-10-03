-- CreateTable
CREATE TABLE "Month" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Month_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryInMonth" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "monthId" TEXT NOT NULL,
    "goal" INTEGER NOT NULL,
    "spent" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CategoryInMonth_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoryInMonth" ADD CONSTRAINT "CategoryInMonth_monthId_fkey" FOREIGN KEY ("monthId") REFERENCES "Month"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
