/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from "class-validator";

export class MovementDto{
  
  @IsString()
  // @IsNotEmpty()
  registrationDate: string;
  @IsString()
  typeMovement: string;
  @IsNumber()
  movementValue: string;
  @IsString()
  movementDescription: string;
  @IsString()
  userId:string;
}


