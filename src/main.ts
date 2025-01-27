/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`El puerto de Api seria => http://localhost:${3000}` );  
  app.enableCors()
  app.use(express.json({ limit: '10mb' })); // Ajusta el límite según sea necesario
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
