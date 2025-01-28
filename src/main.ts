/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from "express";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`El puerto de Api seria => http://localhost:${3000}` );  
  app.enableCors({
    origin:  [
      "http://localhost:5173",   // Permite desde localhost
      "http://192.168.1.22:5173", // Permite desde la IP local
    ], // Esto permite todos los orígenes durante las pruebas
    methods: "GET, POST, PUT, DELETE, PATCH",
    allowedHeaders: "Content-Type, Authorization, X-Requested-With",
    credentials: true, // Si necesitas cookies o autenticación
  })
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
