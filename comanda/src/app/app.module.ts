// modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RuteoModule } from "./ruteo/ruteo.module";
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

// servicios
import { ServicioGeneralService } from './servicios/servicio-general.service';
import { ServicioEmpleadoService } from "./servicios/servicio-empleado.service";
import { ServicioMenuService } from "./servicios/servicio-menu.service";
import { ServicioClienteService } from "./servicios/servicio-cliente.service";

// componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { SeguimientoPedidoComponent } from './componentes/seguimiento-pedido/seguimiento-pedido.component';
import { PrincipalClienteComponent } from './componentes/principal-cliente/principal-cliente.component';
import { RegistroComponent } from './componentes/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    ListadoComponent,
    BienvenidoComponent,
    CarouselComponent,
    SeguimientoPedidoComponent,
    PrincipalClienteComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RuteoModule,
    HttpModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [
    ServicioGeneralService,
    ServicioEmpleadoService,
    ServicioMenuService,
    ServicioClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
