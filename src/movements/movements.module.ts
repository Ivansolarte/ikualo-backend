/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MovementsService } from './movements.service';
import { MovementsController } from './movements.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MovementSchema } from 'src/schemas/movements.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:"Movement",schema:MovementSchema}])],
  controllers: [MovementsController],
  providers: [MovementsService],
})
export class MovementsModule {}
