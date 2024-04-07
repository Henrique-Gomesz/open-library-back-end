export type CreateLivroRequest = {
    livro_nome: string;
    lanca_ano: Date;
    livro_categoria: number;
    livro_autores: string[];
    livro_paginas: number;
    livro_editora: string;
}
  