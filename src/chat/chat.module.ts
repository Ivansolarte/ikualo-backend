/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatSchema } from 'src/schemas/chat.schema';

@Module({
   imports:[MongooseModule.forFeature([{ name: "Chat", schema: ChatSchema }])],
  providers: [
    ChatGateway, //funciona como controlador
    ChatService,
  ],
})
export class ChatModule {}
