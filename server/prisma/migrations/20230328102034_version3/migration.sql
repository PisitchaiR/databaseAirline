/*
  Warnings:

  - The values [oneWay,twoWay] on the enum `flightType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `flightId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `seatId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the `PlaneSeat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userCoupon` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "flightType_new" AS ENUM ('to', 'from');
ALTER TABLE "Flight" ALTER COLUMN "type" TYPE "flightType_new" USING ("type"::text::"flightType_new");
ALTER TYPE "flightType" RENAME TO "flightType_old";
ALTER TYPE "flightType_new" RENAME TO "flightType";
DROP TYPE "flightType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "PlaneSeat" DROP CONSTRAINT "PlaneSeat_plane_id_fkey";

-- DropForeignKey
ALTER TABLE "PlaneSeat" DROP CONSTRAINT "PlaneSeat_seat_id_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_flightId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_seatId_fkey";

-- DropForeignKey
ALTER TABLE "userCoupon" DROP CONSTRAINT "userCoupon_idCoupon_fkey";

-- DropForeignKey
ALTER TABLE "userCoupon" DROP CONSTRAINT "userCoupon_idUser_fkey";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "flightId",
DROP COLUMN "seatId";

-- DropTable
DROP TABLE "PlaneSeat";

-- DropTable
DROP TABLE "userCoupon";

-- CreateTable
CREATE TABLE "Collect_Coupon" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "idCoupon" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collect_Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeatReservation" (
    "id" TEXT NOT NULL,
    "seatId" TEXT NOT NULL,
    "reservId" TEXT NOT NULL,

    CONSTRAINT "SeatReservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlightReservation" (
    "id" TEXT NOT NULL,
    "flightId" TEXT NOT NULL,
    "reservId" TEXT NOT NULL,

    CONSTRAINT "FlightReservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plane_Seat" (
    "id" TEXT NOT NULL,
    "plane_id" TEXT NOT NULL,
    "seat_id" TEXT NOT NULL,

    CONSTRAINT "Plane_Seat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Collect_Coupon" ADD CONSTRAINT "Collect_Coupon_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collect_Coupon" ADD CONSTRAINT "Collect_Coupon_idCoupon_fkey" FOREIGN KEY ("idCoupon") REFERENCES "Coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeatReservation" ADD CONSTRAINT "SeatReservation_seatId_fkey" FOREIGN KEY ("seatId") REFERENCES "Plane_Seat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeatReservation" ADD CONSTRAINT "SeatReservation_reservId_fkey" FOREIGN KEY ("reservId") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlightReservation" ADD CONSTRAINT "FlightReservation_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "Flight"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlightReservation" ADD CONSTRAINT "FlightReservation_reservId_fkey" FOREIGN KEY ("reservId") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plane_Seat" ADD CONSTRAINT "Plane_Seat_plane_id_fkey" FOREIGN KEY ("plane_id") REFERENCES "Plane"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plane_Seat" ADD CONSTRAINT "Plane_Seat_seat_id_fkey" FOREIGN KEY ("seat_id") REFERENCES "Seat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
