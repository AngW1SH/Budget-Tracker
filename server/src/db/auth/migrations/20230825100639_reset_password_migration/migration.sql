-- CreateTable
CREATE TABLE "UserResetPassword" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userid" TEXT NOT NULL DEFAULT '',
    "creationtime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserResetPassword_pkey" PRIMARY KEY ("id")
);
