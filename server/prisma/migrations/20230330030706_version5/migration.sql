/*
  Warnings:

  - You are about to drop the column `name_eg` on the `Airline` table. All the data in the column will be lost.
  - You are about to drop the column `name_th` on the `Airline` table. All the data in the column will be lost.
  - You are about to drop the column `air_port_id` on the `Airline_In_Airport` table. All the data in the column will be lost.
  - You are about to drop the column `airline_id` on the `Airline_In_Airport` table. All the data in the column will be lost.
  - You are about to drop the column `name_eg` on the `Countries` table. All the data in the column will be lost.
  - You are about to drop the column `airlineId` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `arrival_date` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `departure_date` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `from_airport_id` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `to_airport_id` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Flight` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Flight` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to drop the column `airline_id` on the `Plane` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Plane` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `idCoupon` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the `Air_Port` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlightReservation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Plane_Seat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Seat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SeatReservation` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nameTh,nameEn,phone]` on the table `Airline` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_en]` on the table `Countries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[flightNo]` on the table `Flight` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nameEn` to the `Airline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameTh` to the `Airline` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Airline` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `airlineId` to the `Airline_In_Airport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `airportId` to the `Airline_In_Airport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_en` to the `Countries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Countries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arriveAirportId` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arrive_date` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departAirportId` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `depart_date` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flightNo` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seat` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Made the column `planeId` on table `Flight` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `seat` to the `Plane` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idFlight` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seat` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Air_Port" DROP CONSTRAINT "Air_Port_countriesId_fkey";

-- DropForeignKey
ALTER TABLE "Airline" DROP CONSTRAINT "Airline_userId_fkey";

-- DropForeignKey
ALTER TABLE "Airline_In_Airport" DROP CONSTRAINT "Airline_In_Airport_air_port_id_fkey";

-- DropForeignKey
ALTER TABLE "Airline_In_Airport" DROP CONSTRAINT "Airline_In_Airport_airline_id_fkey";

-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_airlineId_fkey";

-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_from_airport_id_fkey";

-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_planeId_fkey";

-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_to_airport_id_fkey";

-- DropForeignKey
ALTER TABLE "FlightReservation" DROP CONSTRAINT "FlightReservation_flightId_fkey";

-- DropForeignKey
ALTER TABLE "FlightReservation" DROP CONSTRAINT "FlightReservation_reservId_fkey";

-- DropForeignKey
ALTER TABLE "Plane" DROP CONSTRAINT "Plane_airline_id_fkey";

-- DropForeignKey
ALTER TABLE "Plane_Seat" DROP CONSTRAINT "Plane_Seat_plane_id_fkey";

-- DropForeignKey
ALTER TABLE "Plane_Seat" DROP CONSTRAINT "Plane_Seat_seat_id_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_idCoupon_fkey";

-- DropForeignKey
ALTER TABLE "SeatReservation" DROP CONSTRAINT "SeatReservation_reservId_fkey";

-- DropForeignKey
ALTER TABLE "SeatReservation" DROP CONSTRAINT "SeatReservation_seatId_fkey";

-- DropIndex
DROP INDEX "Airline_name_eg_key";

-- DropIndex
DROP INDEX "Airline_name_th_key";

-- DropIndex
DROP INDEX "Countries_name_eg_key";

-- DropIndex
DROP INDEX "Flight_name_key";

-- AlterTable
ALTER TABLE "Airline" DROP COLUMN "name_eg",
DROP COLUMN "name_th",
ADD COLUMN     "nameEn" TEXT NOT NULL,
ADD COLUMN     "nameTh" TEXT NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Airline_In_Airport" DROP COLUMN "air_port_id",
DROP COLUMN "airline_id",
ADD COLUMN     "airlineId" TEXT NOT NULL,
ADD COLUMN     "airportId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Countries" DROP COLUMN "name_eg",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Flight" DROP COLUMN "airlineId",
DROP COLUMN "arrival_date",
DROP COLUMN "departure_date",
DROP COLUMN "from_airport_id",
DROP COLUMN "name",
DROP COLUMN "to_airport_id",
DROP COLUMN "type",
ADD COLUMN     "arriveAirportId" TEXT NOT NULL,
ADD COLUMN     "arrive_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "departAirportId" TEXT NOT NULL,
ADD COLUMN     "depart_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "flightNo" TEXT NOT NULL,
ADD COLUMN     "seat" INTEGER NOT NULL,
ALTER COLUMN "price" SET DATA TYPE INTEGER,
ALTER COLUMN "planeId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Plane" DROP COLUMN "airline_id",
DROP COLUMN "status",
ADD COLUMN     "airlineId" TEXT,
ADD COLUMN     "seat" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "date",
DROP COLUMN "email",
DROP COLUMN "first_name",
DROP COLUMN "idCoupon",
DROP COLUMN "last_name",
DROP COLUMN "phone",
ADD COLUMN     "couponId" TEXT,
ADD COLUMN     "idFlight" TEXT NOT NULL,
ADD COLUMN     "seat" INTEGER NOT NULL,
ADD COLUMN     "total_price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Air_Port";

-- DropTable
DROP TABLE "FlightReservation";

-- DropTable
DROP TABLE "Plane_Seat";

-- DropTable
DROP TABLE "Seat";

-- DropTable
DROP TABLE "SeatReservation";

-- DropEnum
DROP TYPE "flightType";

-- DropEnum
DROP TYPE "planeStatus";

-- CreateTable
CREATE TABLE "Airport" (
    "id" TEXT NOT NULL,
    "name_th" TEXT NOT NULL,
    "name_eg" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,

    CONSTRAINT "Airport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Airport_name_th_key" ON "Airport"("name_th");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_name_eg_key" ON "Airport"("name_eg");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_nameTh_nameEn_phone_key" ON "Airline"("nameTh", "nameEn", "phone");

-- CreateIndex
CREATE UNIQUE INDEX "Countries_name_en_key" ON "Countries"("name_en");

-- CreateIndex
CREATE UNIQUE INDEX "Flight_flightNo_key" ON "Flight"("flightNo");

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_idFlight_fkey" FOREIGN KEY ("idFlight") REFERENCES "Flight"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_planeId_fkey" FOREIGN KEY ("planeId") REFERENCES "Plane"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_arriveAirportId_fkey" FOREIGN KEY ("arriveAirportId") REFERENCES "Airport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_departAirportId_fkey" FOREIGN KEY ("departAirportId") REFERENCES "Airport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airline" ADD CONSTRAINT "Airline_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plane" ADD CONSTRAINT "Plane_airlineId_fkey" FOREIGN KEY ("airlineId") REFERENCES "Airline"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airline_In_Airport" ADD CONSTRAINT "Airline_In_Airport_airlineId_fkey" FOREIGN KEY ("airlineId") REFERENCES "Airline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airline_In_Airport" ADD CONSTRAINT "Airline_In_Airport_airportId_fkey" FOREIGN KEY ("airportId") REFERENCES "Airport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airport" ADD CONSTRAINT "Airport_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Countries"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
