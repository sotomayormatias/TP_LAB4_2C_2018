import { Component, OnInit } from '@angular/core';
import { ServicioClienteService } from "../../servicios/servicio-cliente.service";
import { ServicioEmpleadoService } from "../../servicios/servicio-empleado.service";
import { ServicioPedidoService } from "../../servicios/servicio-pedido.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuarioLogueado: any;
  miServicioCliente: ServicioClienteService;
  miServicioEmpleado: ServicioEmpleadoService;
  miServicioPedido: ServicioPedidoService;
  listadoMesas: Array<any>;
  mesaElegida: number;

  constructor(servicioCliente: ServicioClienteService,
    servicioEmpleado: ServicioEmpleadoService,
    servicioPedido: ServicioPedidoService) {
    this.miServicioCliente = servicioCliente;
    this.miServicioEmpleado = servicioEmpleado;
    this.miServicioPedido = servicioPedido;
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

  elegirMesa(idMesa: number) {
    this.miServicioEmpleado.atenderMesa(idMesa, 'con cliente esperando pedido')
      .then(data => {
        this.mesaElegida = idMesa;
        // this.traerMesasEsperandoAtencion();
      });
  }

  generarPedido($event) {
    console.log(JSON.stringify($event));
    this.miServicioPedido.generarPedido(this.mesaElegida, JSON.stringify($event))
    .then(data => {
      console.log(data);
    });
    //TODO: generar el pedido con el detalle y el id de la mesa usando el servicio pedido
  }

}
