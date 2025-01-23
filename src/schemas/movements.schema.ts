/* eslint-disable prettier/prettier */
import { Schema } from "mongoose";

export const MovementSchema = new Schema({
  registrationDate: String,
  typeMovement: String,
  movementValue: String,
  movementDescription: String,
  userId: String,
});
