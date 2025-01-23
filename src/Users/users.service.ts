/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UserIf } from "./interfaces/user.interface";

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private readonly userModel: Model<UserIf>) {}
  
  private users: UserDto[] = [];

  async getUsers(): Promise<UserIf[]> {
    const users = await this.userModel.find();
    return users;
  }

  async getUser(id: string): Promise<any> {
    const user = await this.userModel.findById(id);
    return user;
  }

  async createUsers(userDto: UserDto): Promise<UserIf> {
    const createUser = new this.userModel(userDto);
    await createUser.save();
    return createUser;
  }

  async updateUsers(id: string, updateUser: UserDto): Promise<any> {
    const putUser = await this.userModel.findByIdAndUpdate(id, updateUser, {
      new: true,
    });
    return putUser;
  }

  async deleteUsers(id: string): Promise<any> {
    const deleteUser = await this.userModel.findByIdAndDelete(id);
    return deleteUser;
  }
}
