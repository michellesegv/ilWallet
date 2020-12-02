import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pago } from '../models/pago'

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  API_URI = '/wtpago'

  constructor(private http: HttpClient) { }

  getPagos() {
    return this.http.get(`${this.API_URI}`);
  }

  savePago(pago: Pago) {
    return this.http.post(`${this.API_URI}/createCharge`, pago);
  }
}
