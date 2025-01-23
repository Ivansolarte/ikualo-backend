/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';

@Injectable()
export class HomeService {
  
  getAll() {
    return `This action returns all home`;
  }
  
  get(id: number) {
    return `This action returns a #${id} home`;
  }
  
  create(createHomeDto: CreateHomeDto) {
    return 'This action adds a new home';
  }

  update(id: number, updateHomeDto: UpdateHomeDto) {
    return `This action updates a #${id} home`;
  }

  remove(id: number) {
    return `This action removes a #${id} home`;
  }
}
