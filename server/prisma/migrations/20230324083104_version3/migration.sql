-- AlterTable
ALTER TABLE "Air_Port" ADD COLUMN     "countriesId" TEXT;

-- CreateTable
CREATE TABLE "Countries" (
    "id" TEXT NOT NULL,
    "name_th" TEXT NOT NULL,
    "name_eg" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Countries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Countries_name_th_key" ON "Countries"("name_th");

-- CreateIndex
CREATE UNIQUE INDEX "Countries_name_eg_key" ON "Countries"("name_eg");

-- AddForeignKey
ALTER TABLE "Air_Port" ADD CONSTRAINT "Air_Port_countriesId_fkey" FOREIGN KEY ("countriesId") REFERENCES "Countries"("id") ON DELETE SET NULL ON UPDATE CASCADE;
