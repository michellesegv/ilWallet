import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  API_URI = '/wtempresa'
  constructor(private http: HttpClient) { }

  getPagos() {
    return this.http.get(`${this.API_URI}/empresas`);
  }

}
