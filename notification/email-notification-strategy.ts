import { NotificationStrategy } from "./notification-strategy";

export class EmailNotificationStrategy implements NotificationStrategy {
   public sendNotification(mensage:string): void {
         console.log("Sending email notification",mensage);
    }
}