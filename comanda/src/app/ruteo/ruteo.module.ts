import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../componentes/login/login.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { BienvenidoComponent } from '../componentes/bienvenido/bienvenido.component';
import { PrincipalClienteComponent } from "../componentes/principal-cliente/principal-cliente.component";
import { RegistroComponent } from "../componentes/registro/registro.component";

// declaro donde quiero que se dirija
const MiRuteo = [
  { path: '', component: BienvenidoComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Principal', component: PrincipalComponent },
  { path: 'Cliente', component: PrincipalClienteComponent },
  { path: 'Registro', component: RegistroComponent }
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
