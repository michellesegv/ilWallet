import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transferencia } from '../models/transferencia'

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  API_URI = '/wttransferencia'

  constructor(private http: HttpClient) { }

  getTransferencias() {
    return this.http.get(`${this.API_URI}`);
  }

  saveTransferencia(transferencia: Transferencia) {
    return this.http.post(`${this.API_URI}/createCharge`, transferencia);
  }
}
