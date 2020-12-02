import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;

  constructor(private ClienteService: ClienteService) {
    this.signUpForm = this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    return new FormGroup({
      nombre: new FormControl(''),
      apellidoPaterno: new FormControl(''),
      apellidoMaterno: new FormControl(''),
      direccion: new FormControl(''),
      fechaNacimiento: new FormControl(''),
      distrito: new FormGroup({
        distritoId: new FormControl('1'),
        nombre: new FormControl('Miraflores'),
      }),
      tipoDocumento: new FormGroup({
        tipoDocumentoId: new FormControl(1),
        descripcion: new FormControl('DNI'),
      }),
      numeroDocumento: new FormControl(''),
      celular: new FormControl(''),
      genero: new FormGroup({
        generoId: new FormControl(1),
        descripcion: new FormControl('Femenino'),
      }),
      email: new FormControl(''),
      userName: new FormControl(''),
      password: new FormControl(''),
      fechaRegistro: new FormControl('')
    });
  }

  onResetForm(): void {
    this.signUpForm.reset();
  }


  onSaveForm(): void {
    this.ClienteService.saveCliente(this.signUpForm.value).subscribe(
      res => {
        // this.clientes = res;
        console.log(res)
      },
      err => console.error(err)
    );
    this.onResetForm();
  }
}
