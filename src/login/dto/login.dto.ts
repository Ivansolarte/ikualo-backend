/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";
export class LoginDto {
    @IsString()
    email:string;
    @IsString()
    pass:string
}
