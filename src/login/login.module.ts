/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from 'src/schemas/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
