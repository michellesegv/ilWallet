import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes: any = []
  idCliente: any = ''
  clienteData: any = {}

  constructor(private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes()
  }

  getClientes() {
    this.ClienteService.getClientes()
      .subscribe(
        res => {
          this.clientes = res;
          this.filteCliente(this.clientes)
          console.log(res)
        },
        err => console.error(err)
      );
  }

  filteCliente(clientes: any) {
    this.idCliente = JSON.parse(localStorage.getItem('dataUser')).id
    this.clienteData = clientes.filter((cliente: any) => {
      return cliente.clienteId = this.idCliente
      // console.log('wiwi', e)
    })

    console.log('this.clienteData', this.clienteData)
  }
}
