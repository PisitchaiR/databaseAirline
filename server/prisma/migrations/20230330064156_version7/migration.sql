/*
  Warnings:

  - You are about to drop the column `idCoupon` on the `Collect_Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `idUser` on the `Collect_Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `expired` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `idFlight` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `idUser` on the `Reservation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[couponId]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `couponId` to the `Collect_Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Collect_Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expired_at` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flightId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Collect_Coupon" DROP CONSTRAINT "Collect_Coupon_idCoupon_fkey";

-- DropForeignKey
ALTER TABLE "Collect_Coupon" DROP CONSTRAINT "Collect_Coupon_idUser_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_couponId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_idFlight_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_idUser_fkey";

-- AlterTable
ALTER TABLE "Collect_Coupon" DROP COLUMN "idCoupon",
DROP COLUMN "idUser",
ADD COLUMN     "couponId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Coupon" DROP COLUMN "expired",
ADD COLUMN     "expired_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Flight" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "idFlight",
DROP COLUMN "idUser",
ADD COLUMN     "flightId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_couponId_key" ON "Reservation"("couponId");

-- AddForeignKey
ALTER TABLE "Collect_Coupon" ADD CONSTRAINT "Collect_Coupon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collect_Coupon" ADD CONSTRAINT "Collect_Coupon_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "Flight"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Collect_Coupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;
