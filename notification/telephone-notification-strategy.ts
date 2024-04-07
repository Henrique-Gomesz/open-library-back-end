import { NotificationStrategy } from "./notification-strategy";

export class TelephoneNotificationStrategy implements NotificationStrategy {
    sendNotification(mensagem:string) {
        console.log("Sending telephone notification",mensagem);
    }
}