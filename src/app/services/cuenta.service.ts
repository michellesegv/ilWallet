import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cuenta } from '../models/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  API_URI = '/wtcuenta'

  constructor(private http: HttpClient) { }

  getCuentas() {
    return this.http.get(`${this.API_URI}`);
  }

  saveCuenta(cuenta: Cuenta) {
    return this.http.post(`${this.API_URI}/add`, cuenta);
  }

  updateCuenta(cuenta: Cuenta): Observable<Cuenta> {
    return this.http.put(`${this.API_URI}/upd`, cuenta);
  }
}
