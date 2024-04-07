import { ObjectId } from "mongodb";
import mongoose from "mongoose";



  export interface Categoria {
    categ_nome: string;
    id: number;
    _id?:ObjectId
  }
  

 export const CategoriaSchema = new mongoose.Schema<Categoria>({
    categ_nome: { type: String, required: true,unique:true },
    id: { type: Number, required: true, unique: true},
  });

  

export const CategoriaModel = mongoose.model<Categoria>('Categoria', CategoriaSchema);