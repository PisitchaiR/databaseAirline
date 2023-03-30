/*
  Warnings:

  - You are about to drop the column `countryId` on the `Airport` table. All the data in the column will be lost.
  - Added the required column `countriesId` to the `Airport` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Airport" DROP CONSTRAINT "Airport_countryId_fkey";

-- AlterTable
ALTER TABLE "Airport" DROP COLUMN "countryId",
ADD COLUMN     "countriesId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Airport" ADD CONSTRAINT "Airport_countriesId_fkey" FOREIGN KEY ("countriesId") REFERENCES "Countries"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
