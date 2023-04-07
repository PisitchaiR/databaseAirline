-- CreateEnum
CREATE TYPE "Role" AS ENUM ('customer', 'personnel');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'customer',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collect_Coupon" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "idCoupon" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collect_Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coupon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "discount" INTEGER NOT NULL,
    "expired" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "idFlight" TEXT NOT NULL,
    "seat" INTEGER NOT NULL,
    "couponId" TEXT,
    "total_price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flight" (
    "id" TEXT NOT NULL,
    "flightNo" TEXT NOT NULL,
    "depart_date" TIMESTAMP(3) NOT NULL,
    "arrive_date" TIMESTAMP(3) NOT NULL,
    "departAirportId" TEXT NOT NULL,
    "arriveAirportId" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "seat" INTEGER NOT NULL,
    "planeId" TEXT NOT NULL,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Airline" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "nameTh" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Airline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plane" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "seat" INTEGER NOT NULL,
    "airlineId" TEXT,

    CONSTRAINT "Plane_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Airline_In_Airport" (
    "id" TEXT NOT NULL,
    "airlineId" TEXT NOT NULL,
    "airportId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Airline_In_Airport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Airport" (
    "id" TEXT NOT NULL,
    "name_th" TEXT NOT NULL,
    "name_eg" TEXT NOT NULL,
    "countriesId" TEXT NOT NULL,

    CONSTRAINT "Airport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Countries" (
    "code" TEXT NOT NULL,
    "name_th" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Countries_pkey" PRIMARY KEY ("code")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_name_key" ON "Coupon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Flight_flightNo_key" ON "Flight"("flightNo");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_ownerId_key" ON "Airline"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_nameTh_key" ON "Airline"("nameTh");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_nameEn_key" ON "Airline"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_phone_key" ON "Airline"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Plane_name_key" ON "Plane"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_name_th_key" ON "Airport"("name_th");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_name_eg_key" ON "Airport"("name_eg");

-- CreateIndex
CREATE UNIQUE INDEX "Countries_name_th_key" ON "Countries"("name_th");

-- CreateIndex
CREATE UNIQUE INDEX "Countries_name_en_key" ON "Countries"("name_en");

-- AddForeignKey
ALTER TABLE "Collect_Coupon" ADD CONSTRAINT "Collect_Coupon_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collect_Coupon" ADD CONSTRAINT "Collect_Coupon_idCoupon_fkey" FOREIGN KEY ("idCoupon") REFERENCES "Coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "Airline" ADD CONSTRAINT "Airline_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plane" ADD CONSTRAINT "Plane_airlineId_fkey" FOREIGN KEY ("airlineId") REFERENCES "Airline"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airline_In_Airport" ADD CONSTRAINT "Airline_In_Airport_airlineId_fkey" FOREIGN KEY ("airlineId") REFERENCES "Airline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airline_In_Airport" ADD CONSTRAINT "Airline_In_Airport_airportId_fkey" FOREIGN KEY ("airportId") REFERENCES "Airport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airport" ADD CONSTRAINT "Airport_countriesId_fkey" FOREIGN KEY ("countriesId") REFERENCES "Countries"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
