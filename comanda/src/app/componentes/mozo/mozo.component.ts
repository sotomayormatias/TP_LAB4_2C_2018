import { Component, OnInit } from '@angular/core';
import { ServicioClienteService } from "../../servicios/servicio-cliente.service";
import { ServicioEmpleadoService } from "../../servicios/servicio-empleado.service";
import { ServicioPedidoService } from "../../servicios/servicio-pedido.service";

@Component({
  selector: 'app-mozo',
  templateUrl: './mozo.component.html',
  styleUrls: ['./mozo.component.css']
})
export class MozoComponent implements OnInit {
  miServicioCliente: ServicioClienteService;
  miServicioEmpleado: ServicioEmpleadoService;
  miServicioPedido: ServicioPedidoService;
  listadoMesas: Array<any>;
  mesaElegida: number;

  constructor(servicioCliente: ServicioClienteService,
    servicioEmpleado: ServicioEmpleadoService,
    servicioPedido: ServicioPedidoService) { 
      this.listadoMesas = new Array<any>();
      this.miServicioCliente = servicioCliente;
      this.miServicioEmpleado = servicioEmpleado;
      this.miServicioPedido = servicioPedido;
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
  }

}
