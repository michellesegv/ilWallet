import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PagoService } from '../../../services/pago.service'
import { EmpresaService } from '../../../services/empresa.service'
import { CategoriaService } from '../../../services/categoria.service'
import { ServiciosService } from '../../../services/servicios.service'

@Component({
  selector: 'app-registrar-pago',
  templateUrl: './registrar-pago.component.html',
  styleUrls: ['./registrar-pago.component.css']
})

export class RegistrarPagoComponent implements OnInit {

  public categorias: any = [];
  public empresas: any = []

  public idservicio: any;
  public servicios: any = [];
  public pagoForm: FormGroup;
  public servicioId: any = 0
  public empresaId: any = 0

  constructor(private PagoService: PagoService,
    private EmpresaService: EmpresaService,
    private ServiciosService: ServiciosService,
    private CategoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.pagoForm = this.createForm();
    this.llenarCategorias()
  }

  createForm = () => {
    return new FormGroup({
      cuentaId: new FormControl(1),
      servicioId: new FormControl(0),
      monto: new FormControl(),
      tipoPagoId: new FormControl(1),
      tipoTransaccionId: new FormControl(2)
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
      },
      err => console.error(err)
    );
    this.onResetForm();
  }

  llenarCategorias(): void {
    this.CategoriaService.getCategorias().subscribe(
      (res: any) => {
        this.categorias = res
      },
      err => console.error(err)
    )
  }

  llenarEmpresas(idServicios: number): void {
    this.EmpresaService.getEmpresasPorCategoria(idServicios).subscribe(
      (res: any) => {
        this.empresas = res
      },
      err => console.error(err)
    )
  }

  llenarServicios(idEmpresa: number): void {
    this.ServiciosService.getServiciosPorEmpresa(idEmpresa).subscribe(
      (res: any) => {
        this.servicios = res
      },
      err => console.error(err)
    )
  }

  changeCategoria(e: any) {
    this.llenarEmpresas(e.target.selectedIndex)
  }

  changeEmpresa(e: any) {
    let indexEmpresa: number = parseInt(document.querySelectorAll('#select-empresas option')[e.target.selectedIndex].getAttribute('ng-reflect-ng-value'))
    this.llenarServicios(indexEmpresa);
  }

  changeServicio(e: any) {
    this.servicioId = document.querySelectorAll('#select-servicios option')[e.target.selectedIndex].getAttribute('ng-reflect-ng-value')
  }
}
