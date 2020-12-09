import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CuentaService } from '../../../services/cuenta.service';
@Component({
  selector: 'app-registrar-cuenta',
  templateUrl: './registrar-cuenta.component.html',
  styleUrls: ['./registrar-cuenta.component.css']
})
export class RegistrarCuentaComponent implements OnInit {
  public bancos: any = [
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

  public tiposCuenta: any = [
    {
      id: 1,
      nombre: 'CUENTA AHORRO'
    },
    {
      id: 2,
      nombre: 'CUENTA CORRIENTE'
    },
  ]

  constructor(private CuentaService: CuentaService) { }

  public cuentaForm: FormGroup;
  public idCliente: any = 0
  public bankId: any = 0
  public tipoCuentaId: any = 0
  public tipoCuentaName: any = ''
  public cuenta: any

  ngOnInit(): void {
    this.cuentaForm = this.createForm();
    this.idCliente = JSON.parse(localStorage.getItem('dataUser')).id
    this.generateRandom(17)
  }

  createForm = () => {

    return new FormGroup({
      numerocuenta: new FormControl(''),
      saldo: new FormControl(),
      tipocuenta: new FormGroup({
        id: new FormControl(1),
        descripcion: new FormControl(),
      }),
      cliente: new FormGroup({
        clienteId: new FormControl(0)
      }),
      banco: new FormGroup({
        bancoId: new FormControl(0)
      }),
      estado: new FormGroup({
        estadoId: new FormControl(1),
        descripcion: new FormControl('ACTIVO')
      }),
      saldoInicial: new FormControl(0)
    });
  }


  onResetForm(): void {
    this.cuentaForm.reset();
  }

  onSaveForm(): void {

    this.cuentaForm.value.cliente.clienteId = this.idCliente

    this.cuentaForm.value.banco.bancoId = this.bankId

    this.cuentaForm.value.tipocuenta.id = this.tipoCuentaId
    this.cuentaForm.value.tipocuenta.descripcion = this.tipoCuentaName

    this.cuentaForm.value.numerocuenta = this.cuenta

    console.log(this.cuentaForm.value)
    this.CuentaService.saveCuenta(this.cuentaForm.value).subscribe(
      (res: any) => {
        if (res.status == 201) {
          alert('¡Cuenta registrada con éxito!')
        } else {
          alert('Tuvimos un error :(')
        }
        console.log(res)
      },
      err => console.error(err)
    );
    this.onResetForm();
  }

  changeBanco(e: any) {
    this.bankId = e.target.selectedIndex
  }

  changeTipoCuenta(e: any) {
    this.tipoCuentaId = e.target.selectedIndex
    this.tipoCuentaName = e.target.value
    console.log(this.tipoCuentaId)
    console.log(this.tipoCuentaName)
  }

  generateRandom(size: number) {
    let numeroRandoms = ''
    for (let i = 0; i < size; i++) {
      let numeroRandom = Math.round(Math.random() * 10).toString()
      numeroRandoms += numeroRandom
    }
    this.cuenta = numeroRandoms
  }
}
