import { ObjectId } from "mongoose";
import { ContatoUsuario } from "../db/models/usuario";
import { Assinante } from "../observer/assinantes";
import { Publicador } from "../observer/publicador";
import { NotificationClient } from "../clients/notification-client";
import { EmailNotificationStrategy } from "../notification/email-notification-strategy";
import { CreateLivroFacede } from "../facedes/create-livro-facede";
import { isNil } from "lodash";
import { TelephoneNotificationStrategy } from "../notification/telephone-notification-strategy";

export class Usuario implements Assinante{
    private notificationClient: NotificationClient;
    constructor(
        public usu_nome: string,
        public usu_cpf: string,
        public usu_nascimento: Date,
        public usu_contato:ContatoUsuario,
        public _id?:ObjectId
    ){
        this.notificationClient = new NotificationClient(new EmailNotificationStrategy())
    }

    public atualizar(subject: Publicador,message:string): void {
        if(subject instanceof CreateLivroFacede){
            if(isNil(this.usu_contato.email))
                this.notificationClient.setNotificationStrategy(new TelephoneNotificationStrategy())
            else
                this.notificationClient.setNotificationStrategy(new EmailNotificationStrategy())

            this.notificationClient.sendNotification(`Ei ${this.usu_nome}, chegou um novo livro da sua categoria preferida ${message}`)
    }
}}