/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
// import { LoginDto } from "./dto/login.dto";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UserIf } from "src/Users/interfaces/user.interface";

@Injectable()
export class LoginService {
  constructor(@InjectModel("User") private readonly userModel: Model<UserIf>) {}

  async getUser(login: { email: string; pass: string }) {
    const resp = await this.userModel.findOne({
      email: login.email,
      pass: login.pass,
    });
    return resp;
  }

  
}
