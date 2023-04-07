/*
  Warnings:

  - Added the required column `FIRST_NAME` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LAST_NAME` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PHONE` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "FIRST_NAME" TEXT NOT NULL,
ADD COLUMN     "LAST_NAME" TEXT NOT NULL,
ADD COLUMN     "PHONE" TEXT NOT NULL;
