import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  API_URI = '/wtcategoria'
  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get(`${this.API_URI}`);
  }
}
