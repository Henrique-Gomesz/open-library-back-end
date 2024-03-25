import { ObjectId } from "mongodb";
import { LivroModel,Livro } from "../models/livros";

export class LivroRepository {
  public async findAll(): Promise<Livro[]> {
    return LivroModel.find().exec();
  }

  public async findById(livroId: ObjectId): Promise<Livro | null> {
    return LivroModel.findOne({ _id: livroId }).exec();
  }

  public async create(livro: Livro): Promise<Livro> {
    const newLivro = new LivroModel(livro);
    await newLivro.save();
    return newLivro;
  }

}
