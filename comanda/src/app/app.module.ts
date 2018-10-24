import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RuteoModule } from "./ruteo/ruteo.module";

import { ServicioGeneralService } from './servicios/servicio-general.service';
import { ServicioEmpleadoService } from "./servicios/servicio-empleado.service";
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RuteoModule,
    HttpModule
  ],
  providers: [ServicioGeneralService,
    ServicioEmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
