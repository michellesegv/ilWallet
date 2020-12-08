import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Tarjeta } from '../models/tarjeta'

@Injectable({
  providedIn: 'root'
})

export class TarjetaService {

  API_URI = '/wttarjeta'

  constructor(private http: HttpClient) { }

  getTarjetas() {
    return this.http.get(`${this.API_URI}`);
  }

  getTarjetasPorCliente(idCliente: string) {
    return this.http.get(`${this.API_URI}/tarjetaPorCuenta/${idCliente}`);
  }

  saveTarjeta(tarjeta: Tarjeta) {
    return this.http.post(`${this.API_URI}/add`, tarjeta);
  }

  updateTarjeta(tarjeta: Tarjeta): Observable<Tarjeta> {
    return this.http.put(`${this.API_URI}/upd`, tarjeta);
  }
}
