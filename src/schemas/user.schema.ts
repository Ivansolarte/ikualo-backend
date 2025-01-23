/* eslint-disable prettier/prettier */
import { Schema } from "mongoose";

export const UserSchema = new Schema({    
      fullName: String,
      nickName: String,
      email:String,
      pass: String,
      imgUrl: String,
});
