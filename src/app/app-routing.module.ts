import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/components/Dashboard/dashboard.component';
import { NotfoundComponent } from './core/components/notFound/notfound.component';
import { EmpleadoListaComponent } from './components/Empleados/empleadoLista/empleado-lista.component';
import { EmpleadoDetalleComponent } from './components/Empleados/empleadoDetalle/empleado-detalle.component';
import { HomeComponent } from './core/components/home/home.component';
import { ReportesComponent } from './components/Reportes/reportes/reportes.component';
import { ClientesListadoComponent } from './components/Clientes/clientes/clientes-listado.component';
import { EmpleadoAgregarComponent } from './components/Empleados/empleadoAgregar/empleado-agregar.component';

const routes: Routes = [
  {
    path: 'empleados', component: EmpleadoListaComponent,
  },
  {
    path: 'empleados/agregar', component: EmpleadoAgregarComponent
  },
  {
    path: 'empleados/:id', component: EmpleadoDetalleComponent
  },
  {
    path: 'clientes', component: ClientesListadoComponent
  },
  {
    path: 'reportes', component: ReportesComponent
  },
  {
    path: '', component: HomeComponent
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
