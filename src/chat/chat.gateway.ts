/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  ConnectedSocket,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { ChatService } from "./chat.service";

@WebSocketGateway({
  cors: {
    origin: "http://localhost:5173", // URL del cliente
    methods: ["GET", "POST"], // Métodos permitidos
    credentials: true, // Permitir cookies y encabezados de autenticación
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  public server: Server;

  constructor(private readonly chatService: ChatService) {}
  // cuando el cliente se conecta
  handleConnection(client: Socket) {
    console.log("conectado", client.id);
    client.on("historicoMensajes", (data) => {
      // console.log("Datos recibidos", data);
      const transmitter = data.sender;
      const receiver = data.receiver;
      console.log("variables ", transmitter, receiver);
      if (transmitter && receiver) {
        console.log('entro a buscar a la base de datos');
        this.chatService.getMessages(transmitter, receiver).then((resp)=>{
          console.log(resp);
          client.emit("mensajeserver", resp);
        })
      }
    });
  }

  ///cuando el cliente se desconecta es esto
  handleDisconnect(client: Socket) {
    console.log("desconectado", client.id);
  }

  ///cuando el cliente envia algo aquis e guarda
  @SubscribeMessage("mensaje")
  async handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any
  ) {
    console.log(data, "<+++++++++++++++++++++++");

    // Guardar el mensaje
    await this.chatService.CreateMessage(
      data.sender,
      data.receiver,
      data.content
    );

    // Enviar el mensaje a todos excepto al remitente
    client.broadcast.emit("mensajeserver", data);

    // Si quieres enviar los mensajes históricos de inmediato al nuevo cliente que se conecta
    // (dependiendo de la lógica de tu aplicación), puedes agregar la función aquí.
    if (data.sender && data.receiver) {
      const messages = await this.chatService.getMessages(
        data.sender,
        data.receiver
      );
      client.emit("historicoMensajes", messages); // Emitir mensajes históricos al cliente que lo solicita
    }
  }
}
