import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app-service.service';
import { Iempleado } from '../models/empleado';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styleUrls: ['./empleado-detalle.component.css']
})
export class EmpleadoDetalleComponent {

  id: string = '';
  empleado!: Iempleado;

  testForm = this._fb.group({
    _id: ['', Validators.required],
    Identificador: ['', Validators.required],
    Nombre: ['', Validators.required],
    Foto: ['',],
    Puesto: ['', Validators.required],
    Salario: ['', Validators.required],
    Estatus: ['', Validators.required],
    fecha_Contrato: ['', Validators.required],
  });

  constructor(
    private _AppService: AppService,
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    console.log(this._activatedRoute.snapshot.params['id']);
    this.id = this._activatedRoute.snapshot.params['id'].toString();
    this.cargarEmpleado(this.id);
  }

  cargarEmpleado(id: string) {
    this._AppService._ClienteServiceService.getEmpleadoByID(id).subscribe({
      next: (data: any) => {
        console.log('getEmpleadoByID', data);

        this.testForm.patchValue({
          _id: data._id,
          Identificador: data.Identificador,
          Foto: data.Foto,
          Nombre: data.Nombre,
          Puesto: data.Puesto,
          Salario: data.Salario,
          Estatus: data.Estatus,
          fecha_Contrato: data.fecha_Contrato
        });
      },
      error: () => {
        console.log('mensajeErrorDatos');
      }
    });


  }

  guardar() {
    console.warn(this.testForm.value);

    let objectForm = {
      Identificador: Number(this.testForm.controls['Identificador'].value),
      Foto: this.testForm.controls['Foto'].value,
      Nombre: this.testForm.controls['Nombre'].value,
      Puesto: this.testForm.controls['Puesto'].value,
      Salario: Number(this.testForm.controls['Salario'].value),
      Estatus: this.testForm.controls['Estatus'].value,
      fecha_Contrato: this.testForm.controls['fecha_Contrato'].value
    };
    console.log('objectForm', objectForm);

    this._AppService._ClienteServiceService.putEmpleado(this.id, objectForm).subscribe({
      next: (data: any) => {
        console.log('putEmpleado', data);
        this._AppService._notificationService.mensajeNotificacion('success', 'El empleado se actualizo correctamente ', 'Ok');
        this.router.navigate(['/empleados']);
      },
      error: () => {
        console.log('mensajeErrorDatos');
      }
    });

  }

  eliminar() {

    Swal.fire({
      width: 350,
      heightAuto: false,
      position: 'center',
      icon: 'info',
      title: 'Desea eliminar este registro',
      //text: 'vuelve a intentar',
      showConfirmButton: true,
      showDenyButton: true,
      allowOutsideClick: false,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,
      confirmButtonColor: '#009688'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this._AppService._ClienteServiceService.deleteEmpleado(this.id).subscribe({
          next: (data: any) => {
            console.log('Listado', data);
            Swal.fire('eliminado correctamente', '', 'success')
            this.router.navigate(['/empleados']);

          },
          error: () => {
            console.log('mensajeErrorDatos');
          }
        });
      }
    });


  }

  regresar() {
    this.router.navigate(['/empleados']);
  }

}
