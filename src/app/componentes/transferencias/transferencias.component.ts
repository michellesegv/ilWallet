import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../../services/transferencia.service'


@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.css']
})
export class TransferenciasComponent implements OnInit {

  transferencias: any = []

  constructor(private TransferenciaService: TransferenciaService) { }
  ngOnInit(): void {
    this.getTransferencia()
  }

  getTransferencia() {
    this.TransferenciaService.getTransferencias()
      .subscribe(
        (res: any) => {
          this.transferencias = res;
          console.log(res)
        },
        (err: any) => console.error(err)
      );
  }

}
