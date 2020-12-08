import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  API_URI = '/wtservicio'

  constructor(private http: HttpClient) { }

  getServiciosPorEmpresa(idEmpresa: number) {
    return this.http.get(`${this.API_URI}/serviciosPorEmpresa/${idEmpresa}`);
  }
}
