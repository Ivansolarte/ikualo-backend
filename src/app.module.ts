/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsersModule } from "./Users/users.module";

import { MovementsModule } from './movements/movements.module';
import { HomeModule } from './home/home.module';
import { MongooseModule } from "@nestjs/mongoose";
import { LoginModule } from './login/login.module';
import { ChatModule } from './chat/chat.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    UsersModule, 
    MovementsModule, 
    HomeModule,
    MongooseModule.forRoot('mongodb://localhost/bancoMoney'),
    LoginModule,
    ChatModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ]
})
export class AppModule {}
