import { Assinante } from "./assinantes";

export interface Publicador {
    // Attach an observer to the subject.
    inserirAssinante(observer: Assinante): void;

    // Detach an observer from the subject.
    removerAssinante(observer: Assinante): void;

    // Notify all observers about an event.
    notificar(mensage:string): void;
}
