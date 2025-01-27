/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  UseGuards,
} from "@nestjs/common";
import { MovementsService } from "./movements.service";
import { MovementDto } from "./dto/movement.dto";
import { MovementIf } from "./interfaces/movement.interface";
import { AuthTokenGuard } from "src/guards/auth-token/auth-token.guard";

@Controller("/movements")
@UseGuards(AuthTokenGuard)
export class MovementsController {
  constructor(private movementsService: MovementsService) {}
  ///
  @Get()
  
  getAllMovements(@Query('userId') userId: any) {
    // console.log(userId);
    if (userId) {
      return this.movementsService.getMovementsById(userId);            
    } else {
      return this.movementsService.getMovements();      
    }
  }
 
  ///
  @Get("/:id")
  getMovement(@Param("id") id: string) {
    return this.movementsService.getMovement(id);
  }
  //
  @Post()
  async create(@Body() movementDto: MovementDto) {
    return await this.movementsService.createMovement(movementDto);
  }
  //
  @Put("/:id")
  async update(@Param("id") id: string, @Body() body: MovementIf) {
    return await this.movementsService.updateMovement(id,body);
  }
  //
  @Delete("/:id")
  remove(@Param("id") id: string) {
    return this.movementsService.deleteMovement(id);
  }
}
