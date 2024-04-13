import express, { Application, Request, Response } from "express";
import { MongoDatabase } from "./db/connection";
import { Livro } from "./db/models/livros";
import { Usuario } from "./db/models/usuario";
import { CategoriaRepository } from "./db/repositories/categoria-repository";
import { Usuario as UsuarioEntity } from "./entities/usuario";
import { CreateLivroFacede } from "./facedes/create-livro-facede";
import { CreateUserFacede } from "./facedes/create-user-facede";
import { CreateLivroRequest } from "./requests/create-book-request";
import { CreateUserRequest } from "./requests/create-user-request";
const cors = require("cors");
const app: Application = express();

const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

MongoDatabase.connect()
  .then(() => {
    const createUserFacede = new CreateUserFacede();
    const createLivroFacede = new CreateLivroFacede();
    const categoriaRepository = new CategoriaRepository();
    app.listen(port, async () => {
      console.log(`Server is Fire at http://localhost:${port}`);

      app.post("/usuarios", async (req: Request, res: Response) => {
        try {
          const onSuccess = () => {
            res.status(201).json({ message: "User Created" });
          };

          const onError = () => {
            res.status(500).json({ message: "Internal Server Error" });
          };

          const { usu_contato, usu_nome, usu_cpf, usu_nascimento, categorias } =
            req.body as CreateUserRequest;

          createUserFacede.onError = onError;
          createUserFacede.onSuccess = onSuccess;

          return await createUserFacede.execute({
            usu_contato,
            usu_nome,
            usu_cpf,
            usu_nascimento,
            categorias,
          });
        } catch (error) {
          console.log(CreateUserFacede.name, error);
          res.status(500).json({ message: "Internal Server Error" });
        }
      });

      app.post("/livro", async (req: Request, res: Response) => {
        try {
          const onSuccess = (usuarios: Usuario[], livro: Livro) => {
            for (const usuario of usuarios) {
              createLivroFacede.inserirAssinante(
                new UsuarioEntity(
                  usuario.usu_nome,
                  usuario.usu_cpf,
                  usuario.usu_nascimento,
                  usuario.usu_contato
                )
              );
            }

            createLivroFacede.notificar(livro.livro_nome);
            for (const usuario of usuarios) {
              createLivroFacede.removerAssinante(
                new UsuarioEntity(
                  usuario.usu_nome,
                  usuario.usu_cpf,
                  usuario.usu_nascimento,
                  usuario.usu_contato
                )
              );
            }
            res.status(201).json({
              message: "Livro Criado",
              usuarios: usuarios,
              livro: livro.livro_nome,
            });
          };

          const onError = () => {
            res.status(500).json({ message: "Internal Server Error" });
          };

          const {
            livro_nome,
            lanca_ano,
            livro_categoria,
            livro_autores,
            livro_paginas,
            livro_editora,
          } = req.body as CreateLivroRequest;

          createLivroFacede.onSuccess = onSuccess;
          createLivroFacede.onError = onError;
          createLivroFacede.execute({
            livro_nome,
            lanca_ano,
            livro_categoria,
            livro_autores,
            livro_paginas,
            livro_editora,
          });
        } catch (error) {
          console.log(CreateLivroFacede.name, error);
          res.status(500).json({ message: "Internal Server Error" });
        }
      });

      app.post("/categoria", async (req: Request, res: Response) => {
        const categorias = req.body as string[];

        for (const categoria of categorias) {
          await categoriaRepository.create({ categ_nome: categoria, id: 0 });
        }

        res.status(201).json({ message: "Categorias Criadas" });
      });

      app.get("/categoria", async (req: Request, res: Response) => {
        const categorias = await categoriaRepository.findAll();

        res.status(201).json({ categorias: categorias });
      });
    });
  })
  .catch((err) =>
    console.log(err, "Ocorreu um erro ao tentar iniciar o banco de dados")
  );
