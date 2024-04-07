import { Publicador } from "./publicador";

export interface Assinante{
    atualizar(subject: Publicador,mensagem:string): void;
}