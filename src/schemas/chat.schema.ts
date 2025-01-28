/* eslint-disable prettier/prettier */
import { Schema } from "mongoose";

export const ChatSchema = new Schema({
    sender: String,


    receiver:String,
  
   
    content: String,
  
   
    timestamp: Date,
})