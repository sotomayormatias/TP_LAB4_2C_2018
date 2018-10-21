import { NgModule } from '@angular/core';

// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../componentes/login/login.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';

// declaro donde quiero que se dirija
const MiRuteo = [
  { path: '', component: LoginComponent },
  { path: 'Principal', component: PrincipalComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteoModule { }
