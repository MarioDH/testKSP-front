import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app-service.service';
import { Iempleado } from '../models/empleado';

@Component({
  selector: 'app-empleado-agregar',
  templateUrl: './empleado-agregar.component.html',
  styleUrls: ['./empleado-agregar.component.css']
})
export class EmpleadoAgregarComponent {

  id: string = '';
  empleado!: Iempleado;

  testForm = this._fb.group({
    Identificador: ['', Validators.required],
    Nombre: ['', Validators.required],
    Foto: ['', Validators.required],
    Puesto: ['', Validators.required],
    Salario: ['', Validators.required],
    Estatus: ['', Validators.required],
    fecha_Contrato: ['', Validators.required],
  });

  constructor(
    private _AppService: AppService,
    private _fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
  }
 
  guardar() {
    console.log('testForm',this.testForm.value);

    let objectForm = {
      Identificador: Number( this.testForm.controls['Identificador'].value),
      Foto:  this.testForm.controls['Foto'].value,
      Nombre: this.testForm.controls['Nombre'].value,
      Puesto:  this.testForm.controls['Puesto'].value,
      Salario:  Number(this.testForm.controls['Salario'].value),
      Estatus: this.testForm.controls['Estatus'].value,
      fecha_Contrato : this.testForm.controls['fecha_Contrato'].value
  };
  console.log('objectForm', objectForm);

    this._AppService._ClienteServiceService.postEmpleado(objectForm).subscribe({
      next: (data: any) => {
        console.log('postEmpleado', data);
        this._AppService._notificationService.mensajeNotificacion('', 'El empleado se guardo correctamente ', 'Ok');
        this.router.navigate(['/empleados']);
      },
      error: () => {
        console.log('mensajeErrorDatos');
      }
    });

    // this.getlistado();
  }

  regresar() {
    this.router.navigate(['/empleados']);
  }
}
