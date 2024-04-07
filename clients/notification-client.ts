import { NotificationStrategy } from "../notification/notification-strategy";

export class NotificationClient  {
    constructor(private notificationStrategy: NotificationStrategy) {
    }

    public sendNotification(mensagem:string): void {
        this.notificationStrategy.sendNotification(mensagem);
    }

    public setNotificationStrategy(notificationStrategy: NotificationStrategy): void {
        this.notificationStrategy = notificationStrategy;
    }
}