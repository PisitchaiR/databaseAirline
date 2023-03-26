import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as bcrypt from 'bcrypt';
import * as countries from './countries.json';
import * as airport from './airport.json';

async function main() {
  // upsert user have a role user
  await prisma.user.upsert({
    where: { email: 'user@gmail.com' },
    update: {
      email: 'user@gmail.com',
      password: bcrypt.hashSync('password', 10),
    },
    create: {
      email: 'user@gmail.com',
      password: bcrypt.hashSync('password', 10),
    },
  });

  // create country
  countries.map(async (country) => {
    await prisma.countries.upsert({
      where: { code: country.code },
      update: {
        nameTh: country.nameTh,
        nameEn: country.nameEn,
        code: country.code,
      },
      create: {
        nameTh: country.nameTh,
        nameEn: country.nameEn,
        code: country.code,
      },
    });
  });

  // create ariport and airline
  for (let i = 0; i < 9; i++) {
    // upsert user have a role admin
    const admin = await prisma.user.upsert({
      where: { email: `admin${i}@gmail.com` },
      update: {
        email: `admin${i}@gmail.com`,
        password: bcrypt.hashSync('password', 10),
        role: 'personnel',
      },
      create: {
        email: `admin${i}@gmail.com`,
        password: bcrypt.hashSync('password', 10),
        role: 'personnel',
      },
    });
    const airport = await prisma.airport.upsert({
      where: { nameEn: `airport-${i}` },
      update: {
        nameTh: `สนามบิน-${i}`,
        nameEn: `airport-${i}`,
        // random country code
        countriesId: 'TH',
      },
      create: {
        nameTh: `สนามบิน-${i}`,
        nameEn: `airport-${i}`,
        countriesId: 'TH',
      },
    });
    const airline = await prisma.airline.upsert({
      where: { nameEn: `airline-${i}` },
      update: {
        nameTh: `สายการบิน-${i}`,
        nameEn: `airline-${i}`,
        phone: '1234567890',
        userId: admin.id,
      },
      create: {
        nameTh: `สายการบิน-${i}`,
        nameEn: `airline-${i}`,
        phone: '1234567890',
        userId: admin.id,
      },
    });

    await prisma.airlineInAirport.upsert({
      where: {
        id: `${airline.id}-${airport.id}`,
      },
      update: {
        id: `${airline.id}-${airport.id}`,
        airPortId: airport.id,
        airlineId: airline.id,
      },
      create: {
        id: `${airline.id}-${airport.id}`,
        airPortId: airport.id,
        airlineId: airline.id,
      },
    });

    const plane = await prisma.plane.upsert({
      where: { name: `plane-${i}` },
      update: {
        name: `plane-${i}`,
        airlineId: airline.id,
      },
      create: {
        name: `plane-${i}`,
        airlineId: airline.id,
      },
    });

    await prisma.flight.upsert({
      where: { name: `flight-${i}` },
      update: {
        name: `flight-${i}`,
        price: 1000,
        type: Math.random() > 0.5 ? 'oneWay' : 'twoWay',
        departureDate: new Date(),
        arrivalDate: new Date(),
        fromAirportId: airport.id,
        toAirportId: airport.id,
        airlineId: airline.id,
        planeId: plane.id,
      },
      create: {
        name: `flight-${i}`,
        price: 1000,
        type: Math.random() > 0.5 ? 'oneWay' : 'twoWay',
        departureDate: new Date(),
        arrivalDate: new Date(),
        fromAirportId: airport.id,
        toAirportId: airport.id,
        airlineId: airline.id,
        planeId: plane.id,
      },
    });

    //create seat
    for (let i = 0; i < 12; i++) {
      const seat = await prisma.seat.create({
        data: {
          name: `seat-A${i}`,
        },
      });
      await prisma.planeSeat.create({
        data: {
          seatId: seat.id,
          planeId: plane.id,
        },
      });
    }
  }

  // create coupon
  for (let i = 0; i < 5; i++) {
    await prisma.coupon.upsert({
      where: { name: `coupon-${i}` },
      update: {
        name: `coupon-${i}`,
        discount: 10,
        expired: new Date(),
      },
      create: {
        name: `coupon-${i}`,
        discount: 10,
        expired: new Date(),
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
