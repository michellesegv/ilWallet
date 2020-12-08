import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { SignUpComponent } from './componentes/sign-up/sign-up.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
import { RegistrarPagoComponent } from './componentes/pagos/registrar-pago/registrar-pago.component';
import { TransferenciasComponent } from './componentes/transferencias/transferencias.component';
import { RegistrarTransferenciaComponent } from './componentes/transferencias/registrar-transferencia/registrar-transferencia.component';
import { CuentasComponent } from './componentes/cuentas/cuentas.component';
import { RegistrarCuentaComponent } from './componentes/cuentas/registrar-cuenta/registrar-cuenta.component';
import { RegistrarTarjetaComponent } from './componentes/tarjetas/registrar-tarjeta/registrar-tarjeta.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component: ListarComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'tarjetas',
    component: TarjetasComponent
  },
  {
    path: 'pagos',
    component: PagosComponent
  },
  {
    path: 'transferencias',
    component: TransferenciasComponent
  },
  {
    path: 'cuentas',
    component: CuentasComponent
  },
  {
    path: 'cuentas/registrar-cuenta',
    component: RegistrarCuentaComponent
  },
  {
    path: 'tarjetas/registrar-tarjeta',
    component: RegistrarTarjetaComponent
  },
  {
    path: 'pagos/registrar-pago',
    component: RegistrarPagoComponent
  },
  {
    path: 'transferencias/registrar-transferencia',
    component: RegistrarTransferenciaComponent
  }
  // {
  //   path: 'persona/editar/:id',
  //   component: GrabarComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
