/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserIf } from "./interfaces/user.interface";
import { UserDto } from "./dto/user.dto";

@Controller("/users")
export class UsersController {
  //  aqui puedo hacer todo las funciones para los datos de service
  constructor(private usersService: UsersService) {}
  ////////
  ///consulta todos los usuarios
  @Get() //users?limit=?
  getAllUsers(@Query() query: any) {
    console.log(query);
    return this.usersService.getUsers();
  }
  ////////
  ///consulta un solo usuario por ID
  @Get("/:id") //users/?
  getAllUser(@Param("id") id: string) {
    const resp = this.usersService.getUser(id);
    console.log(resp);
    return resp;
  }
  ////////
  ///crea un usuario
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() body: UserDto) {
    const createUser = await this.usersService.createUsers(body);
    return createUser;
  }
  ////////
  ///actualiza un usuario
  @Put('/:id')
  async update(@Param("id") id: string, @Body() body: UserIf) { 
    const putUser = await this.usersService.updateUsers(id, body);   
    return putUser
  }
  ////////
  ///elimina un usuario
  @Delete('/:id')
  async delete(@Param("id") id: string) {
    return await this.usersService.deleteUsers(id);
  }
}
