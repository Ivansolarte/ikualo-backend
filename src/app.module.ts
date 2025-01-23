/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsersModule } from "./Users/users.module";

import { MovementsModule } from './movements/movements.module';
import { HomeModule } from './home/home.module';
import { MongooseModule } from "@nestjs/mongoose";
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    UsersModule, 
    MovementsModule, 
    HomeModule,
    MongooseModule.forRoot('mongodb://localhost/bancoMoney'),
    LoginModule
  ]
})
export class AppModule {}
