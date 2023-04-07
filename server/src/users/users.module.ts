import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET,
      signOptions: { expiresIn: '15m', issuer: process.env.JWT_ISSUER },
    }),
    PassportModule,
  ],
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
})
export class UsersModule {}
