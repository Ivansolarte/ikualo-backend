/* eslint-disable prettier/prettier */
import { Document } from "mongoose";
export interface LoginIf extends Document  {
    email: string;
    pass: string;
}
