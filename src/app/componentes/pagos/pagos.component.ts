import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../services/pago.service';
import { ClienteService } from '../../services/cliente.service'

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  public pagos: any = []
  public idCliente: any = ''

  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

  constructor(private PagoService: PagoService,
    private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.idCliente = JSON.parse(localStorage.getItem('dataUser')).id
    this.getPagos()
    this.getGastosPorCtaegoria()
  }

  getGastosPorCtaegoria() {
    this.ClienteService.getGatosPorCategorias(this.idCliente)
      .subscribe(
        (res: any) => {
          this.generateData(res.result.categorias)
        },
        err => console.error(err)
      );
  }

  generateData(categories: any) {
    let chart = document.getElementById('porcentajes-gastos')
    if (categories.length > 0) {
      categories = categories.sort((a: any, b: any) => {
        return b.total - a.total;
      })

      let counter = 0
      let namesCategories = []
      let valuesCategories = []

      for (let index = 0; index < categories.length; index++) {
        if (categories[index].total > 0) {
          namesCategories.push(categories[index].descripcion)
          valuesCategories.push(categories[index].total)
          counter += categories[index].total
        }
      }
      if (counter > 0) {
        this.doughnutChartLabels = namesCategories
        this.doughnutChartData = valuesCategories
        chart.classList.remove('hidden')
      }
    }
  }

  getPagos() {
    this.PagoService.getPagos()
      .subscribe(
        res => {
          this.pagos = res;
        },
        err => console.error(err)
      );
  }
}
