import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  clientes: any = []
  idCliente: any = 0
  clienteData: any = {}
  name: any = ''

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
      // console.log('wiwi', e)
    })

    console.log('this.clienteData', this.clienteData)
    this.name = this.clienteData[0].nombre
  }

  // wiwi() {
  //   var header = $('header');
  //   var range = 200;
  //   // debugger
  //   $(window).on('scroll', function () {

  //     var scrollTop = $(this).scrollTop(),
  //       height = header.outerHeight(),
  //       offset = height / 2,
  //       calc = 1 - (scrollTop - offset + range) / range;

  //     header.css({ 'opacity': calc });

  //     if (calc > '1') {
  //       header.css({ 'opacity': 1 });
  //     } else if (calc < '0') {
  //       header.css({ 'opacity': 0 });
  //     }

  //   });
  // }
}
