import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export interface Autor {
    autor_nome: string;
    _id:ObjectId
  }
  
export const AutorSchema = new mongoose.Schema<Autor>({
    autor_nome: { type: String, required: true },
  });

  export const AutorModel = mongoose.model<Autor>('Autor', AutorSchema);