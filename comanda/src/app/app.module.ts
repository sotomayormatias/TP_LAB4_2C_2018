// modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RuteoModule } from "./ruteo/ruteo.module";

// componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ListadoComponent } from './componentes/listado/listado.component';

// servicios
import { ServicioGeneralService } from './servicios/servicio-general.service';
import { ServicioEmpleadoService } from "./servicios/servicio-empleado.service";
import { ServicioMenuService } from "./servicios/servicio-menu.service";
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    ListadoComponent,
    BienvenidoComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RuteoModule,
    HttpModule
  ],
  providers: [
    ServicioGeneralService,
    ServicioEmpleadoService,
    ServicioMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
