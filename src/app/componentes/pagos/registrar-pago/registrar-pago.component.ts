import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PagoService } from '../../../services/pago.service'

@Component({
  selector: 'app-registrar-pago',
  templateUrl: './registrar-pago.component.html',
  styleUrls: ['./registrar-pago.component.css']
})

export class RegistrarPagoComponent implements OnInit {

  public servicios: any = [
    {
      id: 1,
      nombre: 'PROVEEDOR DE LUZ'
    },
    {
      id: 2,
      nombre: 'PROVEEDOR DE AGUA'
    },
    {
      id: 3,
      nombre: 'TELEFONIA'
    },
    {
      id: 9,
      nombre: 'GAS NATURAL'
    },
    {
      id: 10,
      nombre: 'MI HOGAR'
    },
    {
      id: 11,
      nombre: 'MI VEHÍCULO'
    },
    {
      id: 12,
      nombre: 'MI PROYECTO'
    },
    {
      id: 13,
      nombre: 'MI NEGOCIO'
    },
    {
      id: 14,
      nombre: 'INTERNET 70 MBPS'
    }
  ]

  public pagoForm: FormGroup;
  public servicioId: any = 0

  constructor(private PagoService: PagoService) { }

  ngOnInit(): void {
    this.pagoForm = this.createForm();
  }

  createForm = () => {

    return new FormGroup({
      cuentaId: new FormControl(1),
      servicioId: new FormControl(0),
      monto: new FormControl(),
      tipoPagoId: new FormControl(1),
      tipoTransaccionId: new FormControl(1)
    });
  }

  onResetForm(): void {
    this.pagoForm.reset();
  }

  onSaveForm(): void {

    this.pagoForm.value.servicioId = this.servicioId

    this.PagoService.savePago(this.pagoForm.value).subscribe(
      (res: any) => {
        if (res.status == 201) {
          alert('¡Tu pago se ha registrado con éxito!')
        } else {
          alert('Tuvimos un error :(')
        }
        console.log(res)
      },
      err => console.error(err)
    );
    this.onResetForm();
  }

  changeServicio(e) {
    this.servicioId = e.target.selectedIndex
  }
}
