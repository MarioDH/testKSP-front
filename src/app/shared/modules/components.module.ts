import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from 'src/app/core/components/home/home.component';
import { NotfoundComponent } from 'src/app/core/components/notFound/notfound.component';
import { EmpleadoListaComponent } from 'src/app/components/Empleados/empleadoLista/empleado-lista.component';
import { EmpleadoDetalleComponent } from 'src/app/components/Empleados/empleadoDetalle/empleado-detalle.component';
import { ReportesComponent } from 'src/app/components/Reportes/reportes/reportes.component';
import { ClientesListadoComponent } from 'src/app/components/Clientes/clientes/clientes-listado.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { EmpleadoAgregarComponent } from 'src/app/components/Empleados/empleadoAgregar/empleado-agregar.component';

//Angular Components
@NgModule({
  declarations: [
    HomeComponent,
    NotfoundComponent,
    EmpleadoListaComponent,
    EmpleadoDetalleComponent,
    ReportesComponent,
    ClientesListadoComponent,
    EmpleadoAgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    NotfoundComponent,
    EmpleadoListaComponent,
    EmpleadoDetalleComponent,
    ReportesComponent,
    ClientesListadoComponent,
  ]
})
export class componentesModule { }
