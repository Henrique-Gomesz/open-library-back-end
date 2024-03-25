import { ObjectId } from 'mongodb';
import { Usuario, UsuarioModel } from '../models/usuario';

export class UsuarioRepository {
  public async findAll(): Promise<Usuario[]> {
    return UsuarioModel.find().exec();
  }

  public async findById(usuarioId: ObjectId): Promise<Usuario | null> {
    return UsuarioModel.findOne({ _id: usuarioId }).exec();
  }

  public async create(usuario: Usuario): Promise<Usuario> {
    console.log('criando')
    const newUsuario = new UsuarioModel(usuario);
    await newUsuario.save();
    return newUsuario;
  }

  public async update(usuarioId: ObjectId, usuario: Partial<Usuario>): Promise<Usuario | null> {
    return UsuarioModel.findOneAndUpdate({ _id: usuarioId }, usuario, { new: true }).exec();
  }

  public async delete(usuarioId: ObjectId): Promise<boolean> {
    const result = await UsuarioModel.deleteOne({ _id: usuarioId }).exec();
    return result.deletedCount !== 0;
  }
}
