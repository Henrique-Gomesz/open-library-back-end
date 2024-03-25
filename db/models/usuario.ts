import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export interface Usuario {
  usu_nome: string;
  usu_cpf: string;
  usu_nascimento: Date;
  usu_conta_ativa: boolean;
  usu_phone?: string;
    usu_email?: string;
    _id?:ObjectId
  }
  
  const UsuarioSchema = new mongoose.Schema<Usuario>({
    usu_phone: { type: String, required: false },
    usu_nome: { type: String, required: true },
    usu_email: { type: String, required: false },
    usu_cpf: { type: String, required: true },
    usu_nascimento: { type: Date, required: true },
    usu_conta_ativa: { type: Boolean, default: true },
  });


  export const UsuarioModel = mongoose.model<Usuario>('Usuario', UsuarioSchema);
