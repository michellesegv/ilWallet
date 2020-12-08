import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../../services/tarjeta.service'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  tarjetas: any = []
  idCliente: any = ''

  constructor(private TarjetaService: TarjetaService) { }

  ngOnInit(): void {
    this.idCliente = JSON.parse(localStorage.getItem('dataUser')).id

    this.getTarjetasPorCliente()
  }

  getTarjetasPorCliente() {
    this.TarjetaService.getTarjetasPorCliente(this.idCliente)
      .subscribe(
        res => {
          this.tarjetas = res;
          console.log(res)
        },
        err => console.error(err)
      );
  }
  // getTarjetas() {
  //   this.TarjetaService.getTarjetas()
  //     .subscribe(
  //       res => {
  //         this.tarjetas = res;
  //         console.log(res)
  //       },
  //       err => console.error(err)
  //     );
  // }
}
