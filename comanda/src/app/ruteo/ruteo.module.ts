import { NgModule } from '@angular/core';

// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../componentes/login/login.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { BienvenidoComponent } from '../componentes/bienvenido/bienvenido.component';
import { PrincipalClienteComponent } from "../componentes/principal-cliente/principal-cliente.component";

// declaro donde quiero que se dirija
const MiRuteo = [
  { path: '', component: BienvenidoComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Principal', component: PrincipalComponent },
  { path: 'Cliente', component: PrincipalClienteComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteoModule { }
