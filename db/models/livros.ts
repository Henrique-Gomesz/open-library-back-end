import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export interface Livro {
  livro_nome: string;
  lanca_ano: Date;
  livro_categoria: number;
  livro_autores: string[];
  livro_paginas: number;
  livro_editora: string;
  _id?: ObjectId
}


const LivroSchema = new mongoose.Schema<Livro>({
  livro_nome: { type: String, required: true },
  lanca_ano: { type: Date, required: true },
  livro_categoria: { type: Number, required: true },
  livro_paginas: { type: Number, required: true },
  livro_editora: { type: String, required: true },
});

export const LivroModel = mongoose.model<Livro>('Livro', LivroSchema);