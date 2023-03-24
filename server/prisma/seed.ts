import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // upsert user have a role user
  await prisma.user.upsert({
    where: { email: 'user@gmail.com' },
    update: {
      email: 'user@gmail.com',
      password: 'password',
    },
    create: {
      email: 'user@gmail.com',
      password: 'password',
    },
  });

  // upsert user have a role admin
  await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {
      email: 'admin@gmail.com',
      password: 'password',
      role: 'admin',
    },
    create: {
      email: 'admin@gmail.com',
      password: 'password',
      role: 'admin',
    },
  });

  // upsert user have a role superAdmin
  await prisma.user.upsert({
    where: { email: 'super@gmail.com' },
    update: {
      email: 'super@gmail.com',
      password: 'password',
      role: 'superAdmin',
    },
    create: {
      email: 'super@gmail.com',
      password: 'password',
      role: 'superAdmin',
    },
  });

  // create ariport and airline
  for (let i = 0; i < 9; i++) {
    const airport = await prisma.airPort.upsert({
      where: { nameEn: `airport-${i}` },
      update: {
        nameTh: `สนามบิน-${i}`,
        nameEn: `airport-${i}`,
      },
      create: {
        nameTh: `สนามบิน-${i}`,
        nameEn: `airport-${i}`,
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
      },
    });
  }

  // create plane
  const airline = await prisma.airline.findMany();
  airline.map(async (airline, index) => {
    const plane = await prisma.plane.create({
      data: {
        name: `plane-${index}`,
        airlineId: airline.id,
      },
    });
    await prisma.flight.update({
      where: { airlineId: airline.id },
      data: {
        planeId: plane.id,
      },
    });
  });

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
