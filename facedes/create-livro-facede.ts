import { ObjectId } from "bson";
import { NotificationClient } from "../clients/notification-client";
import { Usuario } from "../db/models/usuario";
import { CategoriaUsuarioRepository } from "../db/repositories/categoria-usuario-repository";
import { LivroRepository } from "../db/repositories/livros-repository";
import { UsuarioRepository } from "../db/repositories/usuario-repository";
import { EmailNotificationStrategy } from "../notification/email-notification-strategy";
import { CreateLivroRequest } from "../requests/create-book-request";
import { isNil } from "lodash";
import { TelephoneNotificationStrategy } from "../notification/telephone-notification-strategy";
import { Publicador } from "../observer/publicador";
import { Assinante } from "../observer/assinantes";
import { Livro } from "../db/models/livros";

export class CreateLivroFacede implements Publicador{
    private livroRepository: LivroRepository;
    private notificationClient: NotificationClient;
    private categoriaUsuarioRepository: CategoriaUsuarioRepository;
    private usuarioRepositorio: UsuarioRepository
    private assinantes: Assinante[]

    public onSuccess = (usuarios:Usuario[],livro:Livro) => {}
    public onError = () => {}

    constructor() {
        this.livroRepository = new LivroRepository()
        this.notificationClient = new NotificationClient(new EmailNotificationStrategy())
        this.categoriaUsuarioRepository = new CategoriaUsuarioRepository()
        this.usuarioRepositorio = new UsuarioRepository()
        this.assinantes = []
    }

    public inserirAssinante(assinante: Assinante): void {
        this.assinantes.push(assinante)
    }

    public removerAssinante(observer: Assinante): void {
        this.assinantes = []
    }

    public notificar(mensagem:string): void {
        for (const assinante of this.assinantes) {
            assinante.atualizar(this,mensagem)
        }
    }

    public async execute(createBook: CreateLivroRequest): Promise<void> {
        try {
            const livro = await this.livroRepository.create({
                livro_nome: createBook.livro_nome,
                lanca_ano: createBook.lanca_ano,
                livro_categoria: createBook.livro_categoria,
                livro_autores: createBook.livro_autores,
                livro_paginas: createBook.livro_paginas,
                livro_editora: createBook.livro_editora
            });

            const usuariosInscritos = await this.categoriaUsuarioRepository.getUsuariosByCategoria(createBook.livro_categoria)

            const usuarios: Usuario[] = []
            for (const usuario of usuariosInscritos) {
                const user = await this.usuarioRepositorio.findById(new ObjectId(usuario.usuario_id))
                if(user)
                    usuarios.push(user)
            }


            this.onSuccess(usuarios,livro)
        } catch (error) {
            this.onError()
            console.log(CreateLivroFacede.name, error)
        }
    }
}