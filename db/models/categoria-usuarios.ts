import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export interface CategoriaUsuario {
    usuario_id: number;
    categoria_id: number;
    _id:ObjectId
  }

const CategoriaUsuarioSchema = new mongoose.Schema<CategoriaUsuario>({
    usuario_id: { type: Number, required: true },
    categoria_id: { type: Number, required: true },
  });
  

export const CategoriaUsuarioModel = mongoose.model<CategoriaUsuario>('CategoriaUsuario', CategoriaUsuarioSchema);