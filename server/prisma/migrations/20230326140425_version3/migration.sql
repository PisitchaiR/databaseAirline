/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Air_Port` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Air_Port` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Airline` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Airline` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Airline_In_Airport` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Airline_In_Airport` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Countries` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Countries` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Plane` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Plane` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `PlaneSeat` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `PlaneSeat` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Seat` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Seat` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Air_Port" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Airline" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Airline_In_Airport" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Countries" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Coupon" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Flight" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Plane" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "PlaneSeat" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Seat" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
