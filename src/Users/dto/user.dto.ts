/* eslint-disable prettier/prettier */
import { IsString, IsEmail, MaxLength } from "class-validator";

export class UserDto{
  
  @IsString()
  // @IsNotEmpty()
  fullName: string;
  @IsString()
  nickName: string;
  @IsEmail()
  email: string;
  // @IsNotEmpty()
  @MaxLength(10)
  pass: string;
  @IsString()
  imgUrl:string;
}
