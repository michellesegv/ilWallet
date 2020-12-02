import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { SignUpComponent } from './componentes/sign-up/sign-up.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
import { TransferenciasComponent } from './componentes/transferencias/transferencias.component';
import { CuentasComponent } from './componentes/cuentas/cuentas.component';

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
  }
  // {
  //   path: 'persona/agregar',
  //   component: GrabarComponent
  // },
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
