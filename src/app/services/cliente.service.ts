import { Injectable } from '@angular/core';
import { Cliente } from '../models/client'
import { ClienteLogin } from '../models/clienteLogin'

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  API_URI = '/wtcliente'

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get(`${this.API_URI}`);
  }

  saveCliente(cliente: Cliente) {
    return this.http.post(`${this.API_URI}/add`, cliente);
  }

  loginCliente(cliente: ClienteLogin) {
    console.log(cliente)
    return this.http.post(`${this.API_URI}/login`, cliente);
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put(`${this.API_URI}/upd`, cliente);
  }
}
