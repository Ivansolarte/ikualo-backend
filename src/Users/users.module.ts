/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from './users.service';
import { UserSchema } from "src/schemas/user.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports:[MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
    controllers:[UsersController],
    providers: [UsersService]
})
export class UsersModule {}
