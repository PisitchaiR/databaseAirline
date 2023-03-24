import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as bcrypt from 'bcrypt';
import * as countries from './countries.json';

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

  // upsert user have a role admin
  await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('password', 10),
      role: 'personnel',
    },
    create: {
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('password', 10),
      role: 'personnel',
    },
  });

  console.log(countries[Math.floor(Math.random() * countries.length)].code);

  // create ariport and airline
  for (let i = 0; i < 9; i++) {
    const airport = await prisma.airport.upsert({
      where: { nameEn: `airport-${i}` },
      update: {
        nameTh: `สนามบิน-${i}`,
        nameEn: `airport-${i}`,
        // random country code
        countriesId:
          countries[Math.floor(Math.random() * countries.length)].code,
      },
      create: {
        nameTh: `สนามบิน-${i}`,
        nameEn: `airport-${i}`,
        countriesId:
          countries[Math.floor(Math.random() * countries.length)].code,
      },
    });
    const airline = await prisma.airline.upsert({
      where: { nameEn: `airline-${i}` },
      update: {
        nameTh: `สายการบิน-${i}`,
        nameEn: `airline-${i}`,
        phone: '1234567890',
      },
      create: {
        nameTh: `สายการบิน-${i}`,
        nameEn: `airline-${i}`,
        phone: '1234567890',
      },
    });
    await prisma.airlineInAirport.create({
      data: {
        airPortId: airport.id,
        airlineId: airline.id,
      },
    });

    const plane = await prisma.plane.create({
      data: {
        name: `plane-${i}`,
        airlineId: airline.id,
      },
    });

    await prisma.flight.create({
      data: {
        name: `flight-${i}`,
        price: 1000,
        type: Math.random() > 0.5 ? 'oneWay' : 'twoWay',
        seat: 100,
        departureDate: new Date(),
        arrivalDate: new Date(),
        fromAirportId: airport.id,
        toAirportId: airport.id,
        airlineId: airline.id,
        planeId: plane.id,
      },
    });
  }

  // create coupon
  for (let i = 0; i < 5; i++) {
    await prisma.coupon.create({
      data: {
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
