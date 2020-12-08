import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PagoService } from '../../../services/pago.service'
import { EmpresaService } from '../../../services/empresa.service'

@Component({
  selector: 'app-registrar-pago',
  templateUrl: './registrar-pago.component.html',
  styleUrls: ['./registrar-pago.component.css']
})

export class RegistrarPagoComponent implements OnInit {

  public empresas: any = [
    {
      id: 1,
      descripcion: 'PROVEEDOR DE LUZ'
    },
    {
      id: 2,
      descripcion: 'PROVEEDOR DE AGUA'
    },
    {
      id: 3,
      descripcion: 'TELEFONIA'
    },
    {
      id: 9,
      descripcion: 'GAS NATURAL'
    },
    {
      id: 10,
      descripcion: 'MI HOGAR'
    },
    {
      id: 11,
      descripcion: 'MI VEHÍCULO'
    },
    {
      id: 12,
      descripcion: 'MI PROYECTO'
    },
    {
      id: 13,
      descripcion: 'MI NEGOCIO'
    },
    {
      id: 14,
      descripcion: 'INTERNET 70 MBPS'
    }
  ]

  public idservicio: any;
  public servicios: any;
  public pagoForm: FormGroup;
  public servicioId: any = 0

  constructor(private PagoService: PagoService, private EmpresaService: EmpresaService) { }

  ngOnInit(): void {
    this.pagoForm = this.createForm();
    this.llenarServicios()
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

  llenarServicios(): void {
    this.EmpresaService.getPagos().subscribe(
      (res: any) => {
        console.log(res)
        this.empresas = res
      },
      err => console.error(err)
    )
  }

  onSaveForm(): void {
    console.log('1', this.pagoForm.value)
    this.pagoForm.value.servicioId = this.servicioId
    console.log('2', this.pagoForm.value)

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

  changeEmpresa(e: any) {
    this.servicios = this.empresas.filter((empresa: any) => {
      return empresa.id == e.target.selectedIndex ? empresa.servicios : null
    })
  }

  changeServicio(e: any) {
    this.servicioId = document.querySelectorAll('#select-servicios option')[e.target.selectedIndex].getAttribute('ng-reflect-ng-value')
  }
}
