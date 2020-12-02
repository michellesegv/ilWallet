import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { SignUpComponent } from './componentes/sign-up/sign-up.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { RouterModule } from '@angular/router';

import { ClienteService } from './services/cliente.service'
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CuentasComponent } from './componentes/cuentas/cuentas.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
import { TransferenciasComponent } from './componentes/transferencias/transferencias.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ListarComponent,
    DashboardComponent,
    HeaderComponent,
    CuentasComponent,
    TarjetasComponent,
    PagosComponent,
    TransferenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
