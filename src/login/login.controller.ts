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
} from "@nestjs/common";
import { LoginService } from "./login.service";
import { LoginDto } from "./dto/login.dto";
import { Response } from "express";
import { encryptData } from "../utils/encrypted";

@Controller("/login")
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async get(@Body() body: LoginDto, @Res() res: Response) {
    const resp = await this.loginService.getUser(body);

    if (!resp)
      throw new NotFoundException({
        status: false,
        data: null,
        message: "El usuario no existe jjj!",
      });
    const token = encryptData(resp.nickName);

    res.setHeader("token", token);
    return res.status(HttpStatus.OK).json({
      status: true,
      token,
      data: resp,
      message: "El usuario existoso!",
    });
  }
}
