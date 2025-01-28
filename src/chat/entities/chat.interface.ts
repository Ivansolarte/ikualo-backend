/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface  ChatIf extends Document {
     
      sender: string;
     
      receiver: string;
   
      content: string;
     
      timestamp: Date;
}
