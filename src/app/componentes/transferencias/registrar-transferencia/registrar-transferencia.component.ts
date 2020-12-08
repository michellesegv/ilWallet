import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TransferenciaService } from '../../../services/transferencia.service'

@Component({
  selector: 'app-registrar-transferencia',
  templateUrl: './registrar-transferencia.component.html',
  styleUrls: ['./registrar-transferencia.component.css']
})
export class RegistrarTransferenciaComponent implements OnInit {

  transferenciaForm: FormGroup;

  bancos: any = [
    {
      id: 1,
      nombre: 'BCP'
    },
    {
      id: 2,
      nombre: 'BBVA'
    },
    {
      id: 3,
      nombre: 'PICHINCHA'
    },
    {
      id: 4,
      nombre: 'SCOTIABANK'
    },
    {
      id: 5,
      nombre: 'INTERBANK'
    },
    {
      id: 6,
      nombre: 'MIBANCO'
    },
    {
      id: 7,
      nombre: 'AZTECA'
    },
    {
      id: 8,
      nombre: 'BANBIF'
    },
  ]

  public bankId: any = 0

  constructor(private TransferenciaService: TransferenciaService) { }

  ngOnInit(): void {
    this.transferenciaForm = this.createForm();
  }

  createForm = () => {
    return new FormGroup({
      cuentaId: new FormControl(1),
      bancoId: new FormControl(0),
      monto: new FormControl(),
      numerodestino: new FormControl()
    });
  }

  //   {
  //     "cuentaId":1,
  //     "bancoId":2,
  //     "monto":100,
  //     "numerodestino":"123456789874563214"
  //  }


  onResetForm(): void {
    this.transferenciaForm.reset();
  }


  onSaveForm(): void {

    this.transferenciaForm.value.bancoId = this.bankId

    this.TransferenciaService.saveTransferencia(this.transferenciaForm.value).subscribe(
      (res: any) => {
        console.log(res)
        if (res.status == 201) {
          alert('¡Tu transferencia se ha registrado con éxito!')
        } else {
          alert('Tuvimos un error :(')
        }
      },
      err => console.error(err)
    );
    this.onResetForm();
  }

  changeBanco(e) {
    this.bankId = e.target.selectedIndex
  }
}
