import { ContatoUsuario } from "../db/models/usuario";

export type CreateUserRequest = {
    usu_nome: string;
    usu_cpf: string;
    usu_nascimento: Date;
    usu_contato:ContatoUsuario;
    categorias: number[];
}