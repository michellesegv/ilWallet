import { Component, OnInit } from '@angular/core';

import { CuentaService } from '../../services/cuenta.service'

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  public cuentas: any = []
  public idCliente: any = ''

  constructor(private CuentaService: CuentaService) { }

  ngOnInit(): void {
    this.idCliente = JSON.parse(localStorage.getItem('dataUser')).id
    this.getCuentasPorCliente()
  }

  getCuentasPorCliente() {
    this.CuentaService.getCuentasPorCliente(this.idCliente)
      .subscribe(
        res => {
          this.cuentas = res;
          console.log(res)
        },
        err => console.error(err)
      );
  }
}
