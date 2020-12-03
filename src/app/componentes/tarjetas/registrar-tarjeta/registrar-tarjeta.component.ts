import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TarjetaService } from '../../../services/tarjeta.service';

@Component({
  selector: 'app-registrar-tarjeta',
  templateUrl: './registrar-tarjeta.component.html',
  styleUrls: ['./registrar-tarjeta.component.css']
})
export class RegistrarTarjetaComponent implements OnInit {
  public tarjetaForm: FormGroup;
  public marcaId: any = 0
  public tipoId: any = 0

  public tipos: any = [
    {
      id: 1,
      nombre: 'TARJETA DEBITO'
    },
    {
      id: 2,
      nombre: 'TARJETA CREDITO'
    },
    {
      id: 3,
      nombre: 'TARJETA PREPAGO'
    },
    {
      id: 4,
      nombre: 'TARJETA VIRTUAL'
    }
  ]

  public marcas: any = [
    {
      id: 1,
      nombre: 'VISA'
    },
    {
      id: 2,
      nombre: 'MASTERCAD'
    },
    {
      id: 3,
      nombre: 'AMERICAN EXPRESS'
    },
    {
      id: 4,
      nombre: 'DINERS CLUB'
    },
    {
      id: 5,
      nombre: 'OTRAS'
    },
  ]

  constructor(private TarjetaService: TarjetaService) { }

  ngOnInit(): void {
    this.tarjetaForm = this.createForm();
  }

  createForm = () => {

    return new FormGroup({
      cuenta: new FormGroup({
        id: new FormControl(1)
      }),
      tipotarjeta: new FormGroup({
        id: new FormControl(0)
      }),
      marcatarjeta: new FormGroup({
        marcarTajertaId: new FormControl(0)
      }),
      estado: new FormGroup({
        estadoId: new FormControl(1)
      }),
      numeroTarjeta: new FormControl('')
    });
  }

  onResetForm(): void {
    this.tarjetaForm.reset();
  }

  onSaveForm(): void {

    this.tarjetaForm.value.marcatarjeta.marcarTajertaId = this.marcaId
    this.tarjetaForm.value.tipotarjeta.id = this.tipoId

    this.TarjetaService.saveTarjeta(this.tarjetaForm.value).subscribe(
      (res: any) => {
        if (res.status == 201) {
          alert('¡Tu tarjeta se ha registrado con éxito!')
        } else {
          alert('Tuvimos un error :(')
        }
        console.log(res)
      },
      err => console.error(err)
    );
    this.onResetForm();
  }

  changeMarca(e: any) {
    this.marcaId = e.target.selectedIndex
  }
  changeTipo(e: any) {
    this.tipoId = e.target.selectedIndex
  }
}
