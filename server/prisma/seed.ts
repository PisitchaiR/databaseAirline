import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { hash } from 'argon2';
import * as countries from './data/countries.json';
import * as airport from './data/airport.json';
import * as user from './data/user.json';
import * as personnel from './data/personnel.json';
import * as airline from './data/airline.json';

const createUser = async () => {
  try {
    console.log('start 1');
    user.map(async (user) => {
      const password = await hash(user.password);
      await prisma.user.upsert({
        where: {
          email: user.email,
        },
        update: {
          ...user,
          password,
        },
        create: {
          ...user,
          password,
        },
      });
    });
    console.log('success');
  } catch (error) {
    console.error('error');
    console.log(error);
  }
};

const createPersonnel = async () => {
  try {
    console.log('start 2');
    personnel.map(async (personnel) => {
      const password = await hash(personnel.password);
      await prisma.user.upsert({
        where: {
          email: personnel.email,
        },
        update: {
          ...personnel,
          password,
          role: 'personnel',
        },
        create: {
          ...personnel,
          password,
          role: 'personnel',
        },
      });
    });
    console.log('success');
  } catch (error) {
    console.error('error');
    console.log(error);
  }
};

const createAirline = async () => {
  try {
    console.log('start 3');
    const personnelData = await prisma.user.findMany({
      where: {
        role: 'personnel',
      },
    });
    if (personnelData.length === 0) return console.log('no personnel data');
    personnelData.map(async (personnel, index) => {
      await prisma.airline.upsert({
        where: {
          ownerId: personnel.id,
        },
        update: {
          ownerId: personnel.id,
        },
        create: {
          ownerId: personnel.id,
          nameTh: airline[index].nameTh,
          nameEn: airline[index].nameEn,
          phone: airline[index].phone,
        },
      });
    });
    console.log('success');
  } catch (error) {
    console.error('error');
    console.log(error);
  }
};

const createCountry = async () => {
  try {
    console.log('start 4');
    countries.map(async (country) => {
      await prisma.countries.upsert({
        where: {
          code: country.code,
        },
        update: {
          ...country,
        },
        create: {
          ...country,
        },
      });
    });
    console.log('success');
  } catch (error) {
    console.error('error');
    console.log(error);
  }
};

const createAirport = async () => {
  try {
    console.log('start 5');
    airport.map(async (airport) => {
      await prisma.airport.upsert({
        where: {
          nameTh: airport.nameTh,
        },
        update: {
          nameTh: airport.nameTh,
          nameEn: airport.nameEn,
          countriesId: airport.code,
        },
        create: {
          nameTh: airport.nameTh,
          nameEn: airport.nameEn,
          countriesId: airport.code,
        },
      });
    });
    console.log('success');
  } catch (error) {
    console.error('error');
    console.log(error);
  }
};

const createPlane = async () => {
  try {
    console.log('start 6');
    const airlineData = await prisma.airline.findMany();
    airlineData.map(async (airline, index) => {
      await prisma.plane.upsert({
        where: {
          name: 'plane' + index,
        },
        update: {
          airlineId: airline.id,
          name: 'plane' + index,
          seat: 100,
        },
        create: {
          airlineId: airline.id,
          name: 'plane' + index,
          seat: 100,
        },
      });
    });
    const planeData = await prisma.plane.findMany();
    console.log(planeData.length);
    console.log('success');
  } catch (error) {
    console.error('error');
    console.log(error);
  }
};

const createAirlineInAirport = async () => {
  try {
    console.log('start 7');
    const airportData = await prisma.airport.findMany();
    const airlineData = await prisma.airline.findMany();
    airlineData.map(async (airline, index) => {
      await prisma.airlineInAirport.create({
        data: {
          airlineId: airline.id,
          airportId: airportData[index].id,
        },
      });
    });
    console.log('success');
  } catch (error) {
    console.error('error');
    console.log(error);
  }
};

const createFlight = async () => {
  try {
    console.log('start 8');
    const airlineData = await prisma.airline.findMany();
    const airportData = await prisma.airport.findMany();
    const planeData = await prisma.plane.findMany();
    airlineData.map(async (airline, index) => {
      await prisma.flight.upsert({
        where: {
          flightNo: `TG001${index}`,
        },
        update: {
          airlineId: airline.id,
          departAirportId: airportData[index].id,
          arriveAirportId: airportData[index + 1].id,
          departDate: new Date('2021-10-01'),
          arriveDate: new Date('2021-10-01'),
          price: 1000,
          seat: 100,
          planeId: planeData[index].id,
          flightNo: `TG001${index}`,
        },
        create: {
          airlineId: airline.id,
          departAirportId: airportData[index].id,
          arriveAirportId: airportData[index + 1].id,
          departDate: new Date('2021-10-01'),
          arriveDate: new Date('2021-10-01'),
          price: 1000,
          seat: 100,
          planeId: planeData[index].id,
          flightNo: `TG001${index}`,
        },
      });
    });
    console.log('success');
  } catch (error) {
    console.error('error');
    console.log(error);
  }
};

const createCoupon = async () => {
  try {
    console.log('start 9');
    for (let i = 0; i < 10; i++) {
      const coupon = [
        {
          name: '1234' + i,
          discount: 10,
          expiredAt: new Date('2021-10-01'),
        },
      ];
      await prisma.coupon.createMany({
        data: coupon,
      });
    }
    console.log('success');
  } catch (error) {
    console.error('error');
    console.log(error);
  }
};

const createCollectCoupon = async () => {
  try {
    console.log('start 10');
    const userData = await prisma.user.findMany({
      where: { role: 'customer' },
    });
    const couponData = await prisma.coupon.findMany();
    userData.map(async (user, index) => {
      await prisma.collectCoupon.create({
        data: {
          userId: user.id,
          couponId: couponData[index].id,
        },
      });
    });
    console.log('success');
  } catch (error) {
    console.error('error');
    console.log(error);
  }
};

const createBooking = async () => {
  try {
    console.log('start 11');
    const flightData = await prisma.flight.findMany();
    const userData = await prisma.user.findMany({
      where: { role: 'customer' },
    });
    if (userData.length === 0) return console.log('no user data');
    userData.map(async (user, index) => {
      await prisma.reservation.create({
        data: {
          userId: user.id,
          flightId: flightData[index].id,
          seat: 1,
          totalPrice: 1000,
          firstName: 'test' + index,
          lastName: 'test' + index,
          phone: '12345678' + index,
        },
      });
    });
    console.log('success');
  } catch (error) {
    console.error('error');
    console.log(error);
  }
};

async function main() {
  //user
  await createUser();
  //psesonnel
  await createPersonnel();
  //airline
  await createAirline();
  //country
  await createCountry();
  //airport
  await createAirport();
  //plane
  await createPlane();
  //airline in airport
  await createAirlineInAirport();
  //flight
  await createFlight();
  //coupon
  await createCoupon();
  //collect coupon
  await createCollectCoupon();
  //booking
  await createBooking();
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
