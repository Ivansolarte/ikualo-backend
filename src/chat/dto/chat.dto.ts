/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class ChatDto {
  @IsString()
  sender: string;
  @IsString()
  receiver: string;
  @IsString()
  content: string;
  @IsString()
  timestamp: Date;
}
