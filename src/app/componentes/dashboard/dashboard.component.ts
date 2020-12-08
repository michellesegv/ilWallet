import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public clientes: any = []
  public idCliente: any = 0
  public clienteData: any = {}
  public name: any = ''

  constructor(private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes()
    // this.wiwi()
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
      return cliente.clienteId == this.idCliente
    })

    console.log('this.clienteData', this.clienteData)
    this.name = this.clienteData[0].nombre
  }
}
