import { Injectable } from '@angular/core';
import { Cliente } from '../models/client'
import { ClienteLogin } from '../models/clienteLogin'

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  // http://localhost:8080/wtcliente/add
  API_URI = '/wtcliente'

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get(`${this.API_URI}`);
  }

  // getCliente(id: number) {
  //   return this.http.get(`${this.API_URI}/${id}`);
  // }

  // deleteCliente(id: number) {
  //   return this.http.delete(`${this.API_URI}/${id}`);
  // }

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
