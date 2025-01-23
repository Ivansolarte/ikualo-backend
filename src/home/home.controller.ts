/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { HomeService } from "./home.service";
import { CreateHomeDto } from "./dto/create-home.dto";
import { UpdateHomeDto } from "./dto/update-home.dto";

@Controller("/home")
export class HomeController {
  constructor(private  homeService: HomeService) {}

  @Get()
  getAll() {
    return this.homeService.getAll();
  }

  @Get(":id")
  get(@Param("id") id: string) {
    return this.homeService.get(+id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateHomeDto: UpdateHomeDto) {
    return this.homeService.update(+id, updateHomeDto);
  }

  @Post()
  create(@Body() createHomeDto: CreateHomeDto) {
    return this.homeService.create(createHomeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.homeService.remove(+id);
  }
}
