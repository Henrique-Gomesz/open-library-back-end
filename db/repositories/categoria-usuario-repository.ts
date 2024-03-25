import { ObjectId } from 'mongodb';
import {CategoriaUsuario,CategoriaUsuarioModel}  from '../models/categoria-usuarios';

export class CategoriaUsuarioRepository {
  public async findAll(): Promise<CategoriaUsuario[]> {
    return CategoriaUsuarioModel.find().exec();
  }

  public async findById(categoriaUsuId: number): Promise<CategoriaUsuario | null> {
    return CategoriaUsuarioModel.findOne({ _id: categoriaUsuId }).exec();
  }

  public async create(categoriaUsuario: CategoriaUsuario): Promise<CategoriaUsuario> {
    const newCategoriaUsuario = new CategoriaUsuarioModel(categoriaUsuario);
    await newCategoriaUsuario.save();
    return newCategoriaUsuario;
  }

  public async update(categoriaUsuId: ObjectId, categoriaUsuario: Partial<CategoriaUsuario>): Promise<CategoriaUsuario | null> {
    return CategoriaUsuarioModel.findOneAndUpdate({ _id: categoriaUsuId }, categoriaUsuario, { new: true }).exec();
  }

  public async delete(categoriaUsuId: number): Promise<boolean> {
    const result = await CategoriaUsuarioModel.deleteOne({ categoria_usu_id: categoriaUsuId }).exec();
    return result.deletedCount !== 0;
  }
}
