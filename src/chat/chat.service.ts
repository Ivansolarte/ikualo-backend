/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ChatIf } from "./entities/chat.interface";

@Injectable()
export class ChatService {
  constructor(@InjectModel("Chat") private readonly chatModel: Model<ChatIf>) {}

   // Método para obtener los mensajes entre dos usuarios
   async getMessages(sender: string, receiver: string): Promise<any[]> {
    return this.chatModel
      .find({
        $or: [
          { sender, receiver },
          { sender: receiver, receiver: sender },
        ],
      })
      .sort({ timestamp: 1 }); // Ordenar por fecha ascendente (del más antiguo al más reciente)
  }

  async CreateMessage( sender: string, receiver: string, content: string ): Promise<any> {

    const createMessage = new this.chatModel({
      sender,
      receiver,
      content,
      timestamp: new Date(),
    });
     await createMessage.save()
    return createMessage

  }
}
