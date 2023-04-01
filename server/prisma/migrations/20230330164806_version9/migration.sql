/*
  Warnings:

  - Added the required column `AIRLINE_ID` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flight" ADD COLUMN     "AIRLINE_ID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_AIRLINE_ID_fkey" FOREIGN KEY ("AIRLINE_ID") REFERENCES "Airline"("AIRLINE_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
