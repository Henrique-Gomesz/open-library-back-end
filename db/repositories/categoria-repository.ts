import { ObjectId } from 'mongodb';
import { Categoria, CategoriaModel } from '../models/categorias';

export class CategoriaRepository {
  public async findAll(): Promise<Categoria[]> {
    return CategoriaModel.find().exec();
  }

  public async findById(categoriaId: ObjectId): Promise<Categoria | null> {
    return CategoriaModel.findOne({ categ_id: categoriaId }).exec();
  }

  public async create(categoria: Categoria): Promise<Categoria> {
    const categoriaId = await CategoriaModel.find().countDocuments().exec() + 1;
    categoria.id = categoriaId
    const newCategoria = new CategoriaModel(categoria);
    await newCategoria.save();
    return newCategoria;
  }

  public async update(categoriaId: ObjectId, categoria: Partial<Categoria>): Promise<Categoria | null> {
    return CategoriaModel.findOneAndUpdate({ _id: categoriaId }, categoria, { new: true }).exec();
  }

  public async delete(categoriaId: ObjectId): Promise<boolean> {
    const result = await CategoriaModel.deleteOne({ _id: categoriaId }).exec();
    return result.deletedCount !== 0;
  }
}
