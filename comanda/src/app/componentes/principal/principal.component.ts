import { Component, OnInit } from '@angular/core';
import { ServicioClienteService } from "../../servicios/servicio-cliente.service";
import { ServicioEmpleadoService } from "../../servicios/servicio-empleado.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuarioLogueado: any;
  miServicioCliente: ServicioClienteService;
  miServicioEmpleado: ServicioEmpleadoService;
  listadoMesas: Array<any>;

  constructor(servicioCliente: ServicioClienteService,
              servicioEmpleado: ServicioEmpleadoService) {
    this.miServicioCliente = servicioCliente;
    this.miServicioEmpleado = servicioEmpleado;
    this.usuarioLogueado = JSON.parse(sessionStorage.getItem("sesion"));
    this.traerMesasEsperandoAtencion();
  }

  ngOnInit() {
  }

  traerMesasEsperandoAtencion() {
    this.miServicioCliente.traerMesas('con cliente esperando atencion')
      .then(data => {
        this.listadoMesas = data;
      });
  }

  elegirMesa(idMesa: number){
    this.miServicioEmpleado.atenderMesa(idMesa, 'con cliente esperando pedido')
    .then(data => {
      this.traerMesasEsperandoAtencion();
    });
  }

}
