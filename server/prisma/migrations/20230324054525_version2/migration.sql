/*
  Warnings:

  - You are about to drop the column `date` on the `Airline` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Airline` table. All the data in the column will be lost.
  - You are about to drop the column `name_eg` on the `Airline_In_Airport` table. All the data in the column will be lost.
  - You are about to drop the column `name_th` on the `Airline_In_Airport` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name_th]` on the table `Air_Port` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_eg]` on the table `Air_Port` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_th]` on the table `Airline` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_eg]` on the table `Airline` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Coupon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Flight` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Plane` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name_eg` to the `Airline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_th` to the `Airline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seat` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Airline" DROP COLUMN "date",
DROP COLUMN "name",
ADD COLUMN     "name_eg" TEXT NOT NULL,
ADD COLUMN     "name_th" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Airline_In_Airport" DROP COLUMN "name_eg",
DROP COLUMN "name_th";

-- AlterTable
ALTER TABLE "Flight" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "seat" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Air_Port_name_th_key" ON "Air_Port"("name_th");

-- CreateIndex
CREATE UNIQUE INDEX "Air_Port_name_eg_key" ON "Air_Port"("name_eg");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_name_th_key" ON "Airline"("name_th");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_name_eg_key" ON "Airline"("name_eg");

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_name_key" ON "Coupon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Flight_name_key" ON "Flight"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Plane_name_key" ON "Plane"("name");
