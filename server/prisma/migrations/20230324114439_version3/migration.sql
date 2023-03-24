/*
  Warnings:

  - You are about to drop the column `seat` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `seat` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `seatId` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flight" DROP COLUMN "seat";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "seat",
ADD COLUMN     "seatId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Seat" (
    "seatId" TEXT NOT NULL,
    "flightId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Seat_pkey" PRIMARY KEY ("seatId")
);

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_seatId_fkey" FOREIGN KEY ("seatId") REFERENCES "Seat"("seatId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "Flight"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
