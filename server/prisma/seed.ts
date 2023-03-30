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

  //upsert user have a role admin
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
