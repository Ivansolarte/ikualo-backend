/* eslint-disable prettier/prettier */
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { ChatService } from "./chat.service";
import { Server, Socket } from "socket.io";
import { OnModuleInit } from "@nestjs/common";

@WebSocketGateway({ namespace: '/chatWS'})
export class ChatGateway implements OnModuleInit {
  
  @WebSocketServer()
  public server: Server;

  constructor(private readonly chatService: ChatService) {}

  onModuleInit() {

    this.server.on("connection", (socket: Socket) => {    

      console.log("cliente conectado",socket.id);

      socket.emit('men',"hollaa")

      socket.on("disconnect", () => {
        console.log('cliente desconectado');        
      });
   

    });
  }
}
