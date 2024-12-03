import { Schema,Document } from "mongoose";

export const MaterialSchema = new Schema({
  name: {type: String, required:true},
  category: {type: String, required:true},
  quantity: {type: Number, required:true},
  employee: {type: String, required:true},  

});

export interface Material extends Document {
    name: string;
    category: string;
    quantity: number;
    employee: string;
    }