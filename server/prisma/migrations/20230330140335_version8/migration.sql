/*
  Warnings:

  - The primary key for the `Airline` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Airline` table. All the data in the column will be lost.
  - You are about to drop the column `nameEn` on the `Airline` table. All the data in the column will be lost.
  - You are about to drop the column `nameTh` on the `Airline` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Airline` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Airline` table. All the data in the column will be lost.
  - The primary key for the `Airline_In_Airport` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `airlineId` on the `Airline_In_Airport` table. All the data in the column will be lost.
  - You are about to drop the column `airportId` on the `Airline_In_Airport` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Airline_In_Airport` table. All the data in the column will be lost.
  - The primary key for the `Airport` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `countriesId` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `name_eg` on the `Airport` table. All the data in the column will be lost.
  - You are about to drop the column `name_th` on the `Airport` table. All the data in the column will be lost.
  - The primary key for the `Collect_Coupon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `couponId` on the `Collect_Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Collect_Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Collect_Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Collect_Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Collect_Coupon` table. All the data in the column will be lost.
  - The primary key for the `Countries` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `code` on the `Countries` table. All the data in the column will be lost.
  - You are about to drop the column `name_en` on the `Countries` table. All the data in the column will be lost.
  - You are about to drop the column `name_th` on the `Countries` table. All the data in the column will be lost.
  - The primary key for the `Coupon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `discount` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `expired_at` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Coupon` table. All the data in the column will be lost.
  - The primary key for the `Flight` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `arriveAirportId` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `arrive_date` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `departAirportId` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `depart_date` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `flightNo` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `planeId` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `seat` on the `Flight` table. All the data in the column will be lost.
  - The primary key for the `Plane` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Plane` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Plane` table. All the data in the column will be lost.
  - You are about to drop the column `seat` on the `Plane` table. All the data in the column will be lost.
  - The primary key for the `Reservation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `couponId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `flightId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `seat` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `total_price` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Reservation` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[OWNER_ID]` on the table `Airline` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NAME_TH]` on the table `Airline` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NAME_EN]` on the table `Airline` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[PHONE]` on the table `Airline` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NAME_TH]` on the table `Airport` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NAME_EN]` on the table `Airport` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NAME_TH]` on the table `Countries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NAME_EN]` on the table `Countries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[COUPON_NAME]` on the table `Coupon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[FLIGHT_NO]` on the table `Flight` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[PLANE_NAME]` on the table `Plane` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[COUPON_ID]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[EMAIL]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `AIRLINE_ID` was added to the `Airline` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `NAME_EN` to the `Airline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NAME_TH` to the `Airline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OWNER_ID` to the `Airline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PHONE` to the `Airline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `AIRLINE_ID` to the `Airline_In_Airport` table without a default value. This is not possible if the table is not empty.
  - The required column `AIRLINE_IN_AIRPORT_ID` was added to the `Airline_In_Airport` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `AIRPORT_ID` to the `Airline_In_Airport` table without a default value. This is not possible if the table is not empty.
  - The required column `AIRPORT_ID` was added to the `Airport` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `COUNTRIES_ID` to the `Airport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NAME_EN` to the `Airport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NAME_TH` to the `Airport` table without a default value. This is not possible if the table is not empty.
  - The required column `COLLECT_COUPON_ID` was added to the `Collect_Coupon` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `COUPON_ID` to the `Collect_Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UPDATED_AT` to the `Collect_Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `USER_ID` to the `Collect_Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CODE` to the `Countries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NAME_EN` to the `Countries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NAME_TH` to the `Countries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `COUPON_DISCOUNT` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `COUPON_EXPIRED_AT` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - The required column `COUPON_ID` was added to the `Coupon` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `COUPON_NAME` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ARRIVE_AIRPORT_ID` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ARRIVE_DATE` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DEPART_AIRPORT_ID` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DEPART_DATE` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - The required column `FLIGHT_ID` was added to the `Flight` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `FLIGHT_NO` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PLANE_ID` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PRICE` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SEAT` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - The required column `PLANE_ID` was added to the `Plane` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `PLANE_NAME` to the `Plane` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PLANE_SEAT` to the `Plane` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FLIGHT_ID` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - The required column `RESERVATION_ID` was added to the `Reservation` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `SEAT` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TOTAL_PRICE` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `USER_ID` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EMAIL` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PASSWORD` to the `User` table without a default value. This is not possible if the table is not empty.
  - The required column `USER_ID` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Airline" DROP CONSTRAINT "Airline_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Airline_In_Airport" DROP CONSTRAINT "Airline_In_Airport_airlineId_fkey";

-- DropForeignKey
ALTER TABLE "Airline_In_Airport" DROP CONSTRAINT "Airline_In_Airport_airportId_fkey";

-- DropForeignKey
ALTER TABLE "Airport" DROP CONSTRAINT "Airport_countriesId_fkey";

-- DropForeignKey
ALTER TABLE "Collect_Coupon" DROP CONSTRAINT "Collect_Coupon_couponId_fkey";

-- DropForeignKey
ALTER TABLE "Collect_Coupon" DROP CONSTRAINT "Collect_Coupon_userId_fkey";

-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_arriveAirportId_fkey";

-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_departAirportId_fkey";

-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_planeId_fkey";

-- DropForeignKey
ALTER TABLE "Plane" DROP CONSTRAINT "Plane_airlineId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_couponId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_flightId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- DropIndex
DROP INDEX "Airline_nameEn_key";

-- DropIndex
DROP INDEX "Airline_nameTh_key";

-- DropIndex
DROP INDEX "Airline_ownerId_key";

-- DropIndex
DROP INDEX "Airline_phone_key";

-- DropIndex
DROP INDEX "Airport_name_eg_key";

-- DropIndex
DROP INDEX "Airport_name_th_key";

-- DropIndex
DROP INDEX "Countries_name_en_key";

-- DropIndex
DROP INDEX "Countries_name_th_key";

-- DropIndex
DROP INDEX "Coupon_name_key";

-- DropIndex
DROP INDEX "Flight_flightNo_key";

-- DropIndex
DROP INDEX "Plane_name_key";

-- DropIndex
DROP INDEX "Reservation_couponId_key";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Airline" DROP CONSTRAINT "Airline_pkey",
DROP COLUMN "id",
DROP COLUMN "nameEn",
DROP COLUMN "nameTh",
DROP COLUMN "ownerId",
DROP COLUMN "phone",
ADD COLUMN     "AIRLINE_ID" TEXT NOT NULL,
ADD COLUMN     "NAME_EN" TEXT NOT NULL,
ADD COLUMN     "NAME_TH" TEXT NOT NULL,
ADD COLUMN     "OWNER_ID" TEXT NOT NULL,
ADD COLUMN     "PHONE" TEXT NOT NULL,
ADD CONSTRAINT "Airline_pkey" PRIMARY KEY ("AIRLINE_ID");

-- AlterTable
ALTER TABLE "Airline_In_Airport" DROP CONSTRAINT "Airline_In_Airport_pkey",
DROP COLUMN "airlineId",
DROP COLUMN "airportId",
DROP COLUMN "id",
ADD COLUMN     "AIRLINE_ID" TEXT NOT NULL,
ADD COLUMN     "AIRLINE_IN_AIRPORT_ID" TEXT NOT NULL,
ADD COLUMN     "AIRPORT_ID" TEXT NOT NULL,
ADD CONSTRAINT "Airline_In_Airport_pkey" PRIMARY KEY ("AIRLINE_IN_AIRPORT_ID");

-- AlterTable
ALTER TABLE "Airport" DROP CONSTRAINT "Airport_pkey",
DROP COLUMN "countriesId",
DROP COLUMN "id",
DROP COLUMN "name_eg",
DROP COLUMN "name_th",
ADD COLUMN     "AIRPORT_ID" TEXT NOT NULL,
ADD COLUMN     "COUNTRIES_ID" TEXT NOT NULL,
ADD COLUMN     "NAME_EN" TEXT NOT NULL,
ADD COLUMN     "NAME_TH" TEXT NOT NULL,
ADD CONSTRAINT "Airport_pkey" PRIMARY KEY ("AIRPORT_ID");

-- AlterTable
ALTER TABLE "Collect_Coupon" DROP CONSTRAINT "Collect_Coupon_pkey",
DROP COLUMN "couponId",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "COLLECT_COUPON_ID" TEXT NOT NULL,
ADD COLUMN     "COUPON_ID" TEXT NOT NULL,
ADD COLUMN     "CREATED_AT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "UPDATED_AT" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "USER_ID" TEXT NOT NULL,
ADD CONSTRAINT "Collect_Coupon_pkey" PRIMARY KEY ("COLLECT_COUPON_ID");

-- AlterTable
ALTER TABLE "Countries" DROP CONSTRAINT "Countries_pkey",
DROP COLUMN "code",
DROP COLUMN "name_en",
DROP COLUMN "name_th",
ADD COLUMN     "CODE" TEXT NOT NULL,
ADD COLUMN     "NAME_EN" TEXT NOT NULL,
ADD COLUMN     "NAME_TH" TEXT NOT NULL,
ADD CONSTRAINT "Countries_pkey" PRIMARY KEY ("CODE");

-- AlterTable
ALTER TABLE "Coupon" DROP CONSTRAINT "Coupon_pkey",
DROP COLUMN "discount",
DROP COLUMN "expired_at",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "COUPON_DISCOUNT" INTEGER NOT NULL,
ADD COLUMN     "COUPON_EXPIRED_AT" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "COUPON_ID" TEXT NOT NULL,
ADD COLUMN     "COUPON_NAME" TEXT NOT NULL,
ADD CONSTRAINT "Coupon_pkey" PRIMARY KEY ("COUPON_ID");

-- AlterTable
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_pkey",
DROP COLUMN "arriveAirportId",
DROP COLUMN "arrive_date",
DROP COLUMN "departAirportId",
DROP COLUMN "depart_date",
DROP COLUMN "flightNo",
DROP COLUMN "id",
DROP COLUMN "planeId",
DROP COLUMN "price",
DROP COLUMN "seat",
ADD COLUMN     "ARRIVE_AIRPORT_ID" TEXT NOT NULL,
ADD COLUMN     "ARRIVE_DATE" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "DEPART_AIRPORT_ID" TEXT NOT NULL,
ADD COLUMN     "DEPART_DATE" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "FLIGHT_ID" TEXT NOT NULL,
ADD COLUMN     "FLIGHT_NO" TEXT NOT NULL,
ADD COLUMN     "PLANE_ID" TEXT NOT NULL,
ADD COLUMN     "PRICE" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "SEAT" INTEGER NOT NULL,
ADD CONSTRAINT "Flight_pkey" PRIMARY KEY ("FLIGHT_ID");

-- AlterTable
ALTER TABLE "Plane" DROP CONSTRAINT "Plane_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
DROP COLUMN "seat",
ADD COLUMN     "PLANE_ID" TEXT NOT NULL,
ADD COLUMN     "PLANE_NAME" TEXT NOT NULL,
ADD COLUMN     "PLANE_SEAT" INTEGER NOT NULL,
ADD CONSTRAINT "Plane_pkey" PRIMARY KEY ("PLANE_ID");

-- AlterTable
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_pkey",
DROP COLUMN "couponId",
DROP COLUMN "flightId",
DROP COLUMN "id",
DROP COLUMN "seat",
DROP COLUMN "total_price",
DROP COLUMN "userId",
ADD COLUMN     "COUPON_ID" TEXT,
ADD COLUMN     "FLIGHT_ID" TEXT NOT NULL,
ADD COLUMN     "RESERVATION_ID" TEXT NOT NULL,
ADD COLUMN     "SEAT" INTEGER NOT NULL,
ADD COLUMN     "TOTAL_PRICE" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "USER_ID" TEXT NOT NULL,
ADD CONSTRAINT "Reservation_pkey" PRIMARY KEY ("RESERVATION_ID");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "email",
DROP COLUMN "id",
DROP COLUMN "password",
DROP COLUMN "role",
ADD COLUMN     "EMAIL" TEXT NOT NULL,
ADD COLUMN     "PASSWORD" TEXT NOT NULL,
ADD COLUMN     "ROLE" "Role" NOT NULL DEFAULT 'customer',
ADD COLUMN     "USER_ID" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("USER_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_OWNER_ID_key" ON "Airline"("OWNER_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_NAME_TH_key" ON "Airline"("NAME_TH");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_NAME_EN_key" ON "Airline"("NAME_EN");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_PHONE_key" ON "Airline"("PHONE");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_NAME_TH_key" ON "Airport"("NAME_TH");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_NAME_EN_key" ON "Airport"("NAME_EN");

-- CreateIndex
CREATE UNIQUE INDEX "Countries_NAME_TH_key" ON "Countries"("NAME_TH");

-- CreateIndex
CREATE UNIQUE INDEX "Countries_NAME_EN_key" ON "Countries"("NAME_EN");

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_COUPON_NAME_key" ON "Coupon"("COUPON_NAME");

-- CreateIndex
CREATE UNIQUE INDEX "Flight_FLIGHT_NO_key" ON "Flight"("FLIGHT_NO");

-- CreateIndex
CREATE UNIQUE INDEX "Plane_PLANE_NAME_key" ON "Plane"("PLANE_NAME");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_COUPON_ID_key" ON "Reservation"("COUPON_ID");

-- CreateIndex
CREATE UNIQUE INDEX "User_EMAIL_key" ON "User"("EMAIL");

-- AddForeignKey
ALTER TABLE "Collect_Coupon" ADD CONSTRAINT "Collect_Coupon_USER_ID_fkey" FOREIGN KEY ("USER_ID") REFERENCES "User"("USER_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collect_Coupon" ADD CONSTRAINT "Collect_Coupon_COUPON_ID_fkey" FOREIGN KEY ("COUPON_ID") REFERENCES "Coupon"("COUPON_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_USER_ID_fkey" FOREIGN KEY ("USER_ID") REFERENCES "User"("USER_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_FLIGHT_ID_fkey" FOREIGN KEY ("FLIGHT_ID") REFERENCES "Flight"("FLIGHT_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_COUPON_ID_fkey" FOREIGN KEY ("COUPON_ID") REFERENCES "Collect_Coupon"("COLLECT_COUPON_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_PLANE_ID_fkey" FOREIGN KEY ("PLANE_ID") REFERENCES "Plane"("PLANE_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_ARRIVE_AIRPORT_ID_fkey" FOREIGN KEY ("ARRIVE_AIRPORT_ID") REFERENCES "Airport"("AIRPORT_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_DEPART_AIRPORT_ID_fkey" FOREIGN KEY ("DEPART_AIRPORT_ID") REFERENCES "Airport"("AIRPORT_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airline" ADD CONSTRAINT "Airline_OWNER_ID_fkey" FOREIGN KEY ("OWNER_ID") REFERENCES "User"("USER_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plane" ADD CONSTRAINT "Plane_airlineId_fkey" FOREIGN KEY ("airlineId") REFERENCES "Airline"("AIRLINE_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airline_In_Airport" ADD CONSTRAINT "Airline_In_Airport_AIRLINE_ID_fkey" FOREIGN KEY ("AIRLINE_ID") REFERENCES "Airline"("AIRLINE_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airline_In_Airport" ADD CONSTRAINT "Airline_In_Airport_AIRPORT_ID_fkey" FOREIGN KEY ("AIRPORT_ID") REFERENCES "Airport"("AIRPORT_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airport" ADD CONSTRAINT "Airport_COUNTRIES_ID_fkey" FOREIGN KEY ("COUNTRIES_ID") REFERENCES "Countries"("CODE") ON DELETE RESTRICT ON UPDATE CASCADE;
