import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../../services/tarjeta.service'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  tarjetas: any = []

  constructor(private TarjetaService: TarjetaService) { }

  ngOnInit(): void {
    this.getTarjetas()
  }

  getTarjetas() {
    this.TarjetaService.getTarjetas()
      .subscribe(
        res => {
          this.tarjetas = res;
          // this.filteCliente(this.tarjetas)
          console.log(res)
        },
        err => console.error(err)
      );
  }
}
