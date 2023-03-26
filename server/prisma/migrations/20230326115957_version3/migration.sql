/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Airline` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Airline" ADD COLUMN     "userId" TEXT;

-- CreateTable
CREATE TABLE "userCoupon" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "idCoupon" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userCoupon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Airline_userId_key" ON "Airline"("userId");

-- AddForeignKey
ALTER TABLE "userCoupon" ADD CONSTRAINT "userCoupon_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userCoupon" ADD CONSTRAINT "userCoupon_idCoupon_fkey" FOREIGN KEY ("idCoupon") REFERENCES "Coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airline" ADD CONSTRAINT "Airline_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
