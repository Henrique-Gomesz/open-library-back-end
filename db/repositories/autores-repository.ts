import { ObjectId } from 'mongodb';
import { Autor, AutorModel } from '../models/autores';

export class AutorRepository {
  public async findAll(): Promise<Autor[]> {
    return AutorModel.find().exec();
  }

  public async findById(autorId: ObjectId): Promise<Autor | null> {
    return AutorModel.findOne({ _id: autorId }).exec();
  }

  public async create(autor: Autor): Promise<Autor> {
    const newAutor = new AutorModel(autor);
    await newAutor.save();
    return newAutor;
  }

  public async update(autorId: ObjectId, autor: Partial<Autor>): Promise<Autor | null> {
    return AutorModel.findOneAndUpdate({ _id: autorId }, autor, { new: true }).exec();
  }

  public async delete(autorId: number): Promise<boolean> {
    const result = await AutorModel.deleteOne({ autor_id: autorId }).exec();
    return result.deletedCount !== 0;
  }
}
