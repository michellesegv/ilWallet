import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../services/pago.service'

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  pagos: any = []

  constructor(private PagoService: PagoService) { }

  ngOnInit(): void {
    this.getPagos()
  }

  getPagos() {
    this.PagoService.getPagos()
      .subscribe(
        res => {
          this.pagos = res;
        },
        err => console.error(err)
      );
  }
}
