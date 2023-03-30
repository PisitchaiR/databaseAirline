import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { hash, verify } from 'argon2';
import * as countries from './countries.json';
import * as airport from './airport.json';

async function main() {
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
  // upsert user have a role user
  await prisma.user.upsert({
    where: { email: 'user@gmail.com' },
    update: {
      email: 'user@gmail.com',
      password: await hash('password'),
    },
    create: {
      email: 'user@gmail.com',
      password: await hash('password'),
    },
  });

  //upsert user have a role admin
  await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {
      email: 'admin@gmail.com',
      password: await hash('password'),
      role: 'personnel',
    },
    create: {
      email: 'admin@gmail.com',
      password: await hash('password'),
      role: 'personnel',
    },
  });

  // create airport
  airport.map(async (airport) => {
    await prisma.airport.upsert({
      where: { nameTh: airport.nameTh },
      update: {
        nameTh: airport.nameTh,
        nameEn: airport.nameEn,
        countriesId: 'TH',
      },
      create: {
        nameTh: airport.nameTh,
        nameEn: airport.nameEn,
        countriesId: 'TH',
      },
    });
  });

  for (let i = 0; i < 10; i++) {
    await prisma.coupon.upsert({
      where: { name: `CODE${i}` },
      update: {
        name: `CODE${i}`,
        discount: 10,
        expiredAt: new Date('2023-03-31'),
      },
      create: {
        name: `CODE${i}`,
        discount: 10,
        expiredAt: new Date('2023-03-31'),
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
