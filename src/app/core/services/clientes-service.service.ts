import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/enviroment';

@Injectable({
    providedIn: 'root'
})
export class ClienteServiceService {

    constructor(protected _http: HttpClient) {
    }

    getEmpleados(): Observable<any> {
        return this._http.get(`${environment.WebApiUrl}/empleado`)
            .pipe(map((response: any) => <any>response));
    }

    getEmpleadoByID(id: string) {
        return this._http.get(`${environment.WebApiUrl}/empleado/${id}`)
        .pipe(map((response: any) => <any>response));
    }

    postEmpleado( empleado : any) {
        return this._http.post(`${environment.WebApiUrl}/empleado/`, empleado, )
        .pipe(map((response: any) => <any>response));
    }

    putEmpleado(id: string , empleado : any) {
        return this._http.put(`${environment.WebApiUrl}/empleado/${id}`, empleado, )
        .pipe(map((response: any) => <any>response));
    }

    deleteEmpleado(id: string) {
        return this._http.delete(`${environment.WebApiUrl}/empleado/${id}`)
        .pipe(map((response: any) => <any>response));
    }

}
