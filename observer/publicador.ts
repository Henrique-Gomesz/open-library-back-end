import { Assinante } from "./assinantes";

export interface Publicador {
    inserirAssinante(observer: Assinante): void;
    removerAssinante(observer: Assinante): void;
    notificar(mensage:string): void;
}
