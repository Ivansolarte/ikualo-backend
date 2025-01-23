/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MovementDto } from './dto/movement.dto';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { MovementIf } from './interfaces/movement.interface';

@Injectable()
export class MovementsService {
  constructor(@InjectModel("Movement") private readonly movementModel: Model<MovementIf>) {}
  
  async getMovements(): Promise<MovementIf[]> {
    const resp = await this.movementModel.find()
    return resp;
  }

  async getMovementsById(userid:string): Promise<MovementIf[]> {
    const resp = await this.movementModel.find({ userId: userid })
    return resp;
  }

  async getMovement(id:string): Promise<any>  {
    const resp =await this.movementModel.findById(id)
    return resp;
  }
 
  async createMovement(movementDto: MovementDto): Promise<MovementIf> {
    const resp = new this.movementModel(movementDto)
    await resp.save()
    return resp;
  }

  async updateMovement(id: string, movementDto: MovementDto): Promise<any> {
    const resp = await this.movementModel.findByIdAndUpdate(id,movementDto, {
      new: true,
    })
    return resp;
  }

  async deleteMovement(id: string): Promise<any> {
    const resp = await this.movementModel.findByIdAndDelete(id)
    return resp;
  }
}
