import mongoose from "mongoose";
import { EnumCategorias } from "./categorias";
import { ObjectId } from "mongodb";

export interface Livro {
  livro_nome: string;
  editora_id: number;
  lanca_ano: Date;
  genero: EnumCategorias;
  quantidade: number;
  _id?: ObjectId
  }
  

 const LivroSchema = new mongoose.Schema<Livro>({
    livro_nome: { type: String, required: true },
    lanca_ano: { type: Date, required: true },
    genero: { type: Number, enum: EnumCategorias, required: true },
    quantidade: { type: Number, required: true },
  });

  export const LivroModel = mongoose.model<Livro>('Livro', LivroSchema);