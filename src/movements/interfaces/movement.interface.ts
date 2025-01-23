/* eslint-disable prettier/prettier */

import { Document } from "mongoose";

export interface MovementIf extends Document  {   
    registrationDate:string;
    typeMovement: string;
    movementValue: string;
    movementDescription: string;
    userId: string;
}  
