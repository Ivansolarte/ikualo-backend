/* eslint-disable prettier/prettier */

import { Document } from "mongoose";

export interface UserIf extends Document  {   
    id:string;
    fullName: string;
    nickName: string;
    email: string;
    pass: string;
    imgUrl: string;
}

