// modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RuteoModule } from "./ruteo/ruteo.module";
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { FileUploadModule } from 'primeng/fileupload';
import {ChartModule} from 'primeng/chart';
import {TooltipModule} from 'primeng/tooltip';

// servicios
import { ServicioGeneralService } from './servicios/servicio-general.service';
import { ServicioEmpleadoService } from "./servicios/servicio-empleado.service";
import { ServicioMenuService } from "./servicios/servicio-menu.service";
import { ServicioClienteService } from "./servicios/servicio-cliente.service";
import { ServicioPedidoService } from "./servicios/servicio-pedido.service";

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
import { MozoComponent } from './componentes/mozo/mozo.component';
import { GastronomiaComponent } from './componentes/gastronomia/gastronomia.component';
import { ExportarCsvComponent } from './componentes/exportar-csv/exportar-csv.component';
import { PrincipalSocioComponent } from './componentes/principal-socio/principal-socio.component';
import { TiempoPedidoDirective } from './directivas/tiempo-pedido.directive';
import { PassRobustaDirective } from './directivas/pass-robusta.directive';
import { TooltipDemoraDirective } from './directivas/tooltip-demora.directive';
import { CardinalPipe } from './pipes/cardinal.pipe';


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
    RegistroComponent,
    MozoComponent,
    GastronomiaComponent,
    ExportarCsvComponent,
    PrincipalSocioComponent,
    TiempoPedidoDirective,
    PassRobustaDirective,
    TooltipDemoraDirective,
    CardinalPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RuteoModule,
    HttpModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FileUploadModule,
    ChartModule,
    TooltipModule
  ],
  providers: [
    ServicioGeneralService,
    ServicioEmpleadoService,
    ServicioMenuService,
    ServicioClienteService,
    ServicioPedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
