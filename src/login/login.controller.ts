/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  NotFoundException,
  UseGuards,
} from "@nestjs/common";
import { LoginService } from "./login.service";
import { LoginDto } from "./dto/login.dto";
import { Response } from "express";
import { EncryptData } from "../utils/encrypted";
import { AuthTokenGuard } from "src/guards/auth-token/auth-token.guard";

@Controller("/login")
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async get(@Body() body: LoginDto, @Res() res: Response) {
    const resp = await this.loginService.getUser(body);
// console.log(resp);

    if (!resp)
      throw new NotFoundException({
        status: false,
        data: null,
        message: "El usuario no existe jjj!",
      });

    const fecha = new Date();
    const numberOfMlSeconds = fecha.getTime();
    const addMlSeconds = 15 * 1000; // cambia el => 15 para cambiar el tiempo en segundos
    const newDate = new Date(numberOfMlSeconds + addMlSeconds);

    const token = btoa(JSON.stringify({id:resp._id, user: resp.nickName, fecha: newDate ,state:true}));

    res.setHeader("token", token);
    return res.status(HttpStatus.OK).json({
      status: true,
      token,
      data: resp,
      message: "El usuario existoso!",
    });
  }
}
