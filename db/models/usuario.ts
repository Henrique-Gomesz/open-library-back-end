import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export type ContatoUsuario = {
  telefone?: string;
  email?: string;
}

export interface Usuario {
  usu_nome: string;
  usu_cpf: string;
  usu_nascimento: Date;
  usu_contato:ContatoUsuario
  _id?:ObjectId
  }
  
  const UsuarioSchema = new mongoose.Schema<Usuario>({
    usu_contato:{type: Object,required:true},
    usu_nome: { type: String, required: true },
    usu_cpf: { type: String, required: true },
    usu_nascimento: { type: Date, required: true },

  },{timestamps:true});


  export const UsuarioModel = mongoose.model<Usuario>('Usuario', UsuarioSchema);
