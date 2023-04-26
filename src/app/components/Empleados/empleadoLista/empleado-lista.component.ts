import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/app-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado-lista',
  templateUrl: './empleado-lista.component.html',
  styleUrls: ['./empleado-lista.component.css']
})
export class EmpleadoListaComponent {

  dataSource: any;
  displayedColumns = ['Identificador', 'Nombre', 'Puesto', 'Salario', 'Estatus', 'fecha_Contrato'];

  constructor(private _AppService: AppService,
    private router: Router) { }

  ngOnInit(): void {
    this.obtenerListado();
  }

  obtenerListado(): void {
    this._AppService._ClienteServiceService.getEmpleados().subscribe({
      next: (data: any) => {
        console.log('Listado', data);
        this.dataSource = new MatTableDataSource<any>(data);
      },
      error: () => {
        console.log('mensajeErrorDatos');
      }
    });

  }

  // Obtener info prospecto
  selectProspecto(prospectoDetail: any) {
    console.log('prospectoDetail', prospectoDetail);
    this.router.navigate(['/empleados/' + prospectoDetail._id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  agregarEmpleado(){
    this.router.navigate(['/empleados/agregar']);
  }
}
