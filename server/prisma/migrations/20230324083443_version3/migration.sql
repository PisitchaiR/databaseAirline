/*
  Warnings:

  - The primary key for the `Countries` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Countries` table. All the data in the column will be lost.
  - Added the required column `code` to the `Countries` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Air_Port" DROP CONSTRAINT "Air_Port_countriesId_fkey";

-- AlterTable
ALTER TABLE "Countries" DROP CONSTRAINT "Countries_pkey",
DROP COLUMN "id",
ADD COLUMN     "code" TEXT NOT NULL,
ADD CONSTRAINT "Countries_pkey" PRIMARY KEY ("code");

-- AddForeignKey
ALTER TABLE "Air_Port" ADD CONSTRAINT "Air_Port_countriesId_fkey" FOREIGN KEY ("countriesId") REFERENCES "Countries"("code") ON DELETE SET NULL ON UPDATE CASCADE;
