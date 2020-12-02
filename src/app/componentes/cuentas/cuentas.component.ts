import { Component, OnInit } from '@angular/core';

import { CuentaService } from '../../services/cuenta.service'

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  cuentas: any = []

  constructor(private CuentaService: CuentaService) { }

  ngOnInit(): void {
    this.getCuentas()
  }

  getCuentas() {
    this.CuentaService.getCuentas()
      .subscribe(
        res => {
          this.cuentas = res;
          console.log(res)
        },
        err => console.error(err)
      );
  }
}
