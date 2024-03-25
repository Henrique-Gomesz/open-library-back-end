import { ObjectId } from "mongodb";
import mongoose from "mongoose";

// Enum para as categorias
export enum EnumCategorias {
    Romance,
    FiccaoCientifica,
    Fantasia,
    Misterio,
    Suspense,
    Terror,
    Poesia,
    NaoFiccao,
    Historia,
    Biografia,
    Autobiografia,
    Filosofia,
    Autoajuda,
    Policial,
    Aventura,
    LiteraturaClassica,
    LiteraturaContemporanea,
    Dramaturgia,
  }

  export interface Categoria {
    categ_nome: EnumCategorias;
    _id:ObjectId
  }
  

 export const CategoriaSchema = new mongoose.Schema<Categoria>({
    categ_nome: { type: Number, enum: EnumCategorias, required: true },
  });

  

export const CategoriaModel = mongoose.model<Categoria>('Categoria', CategoriaSchema);