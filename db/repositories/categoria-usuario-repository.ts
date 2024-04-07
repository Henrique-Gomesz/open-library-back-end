import { CategoriaUsuario, CategoriaUsuarioModel } from '../models/categoria-usuarios';

export class CategoriaUsuarioRepository {
 
  public async create(categoriaUsuario: CategoriaUsuario): Promise<CategoriaUsuario> {
    const newCategoriaUsuario = new CategoriaUsuarioModel(categoriaUsuario);
    await newCategoriaUsuario.save();
    return newCategoriaUsuario;
  }

  public async getUsuariosByCategoria(categoriaId: number): Promise<CategoriaUsuario[]> {
    return CategoriaUsuarioModel.find({ categoria_id: categoriaId }).exec();
  }
}
