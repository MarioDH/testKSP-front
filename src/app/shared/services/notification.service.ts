import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class NotificactionService {

    constructor( private router: Router) {}

    public mensajeNotificacion(title: string, textBody: string, textButton: string) {
        Swal.fire({
          title: title,
          text: textBody,
          //  icon: 'error',
          confirmButtonText: textButton,
          confirmButtonColor: '#009688'
        })
      }

}
