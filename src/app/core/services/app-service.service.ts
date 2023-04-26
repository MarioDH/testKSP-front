import { Injectable } from '@angular/core';
import { ClienteServiceService } from './clientes-service.service';
import { NotificactionService } from 'src/app/shared/services/notification.service';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(
        public _ClienteServiceService: ClienteServiceService ,
        public _notificationService: NotificactionService ) { }
}
