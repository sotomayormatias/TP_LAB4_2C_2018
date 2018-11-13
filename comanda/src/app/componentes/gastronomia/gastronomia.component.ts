import { Component, OnInit, Input } from '@angular/core';
import { ServicioPedidoService } from "../../servicios/servicio-pedido.service";

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.component.html',
  styleUrls: ['./gastronomia.component.css']
})
export class GastronomiaComponent implements OnInit {
  @Input() perfil: string;
  miServicioPedido: ServicioPedidoService;
  listadoPendientes: Array<any>;
  listadoEnPreparacion: Array<any>;
  // tiempoEstimado: number;

  constructor(
    servicioPedido: ServicioPedidoService
  ) {
    this.miServicioPedido = servicioPedido;
    this.listadoPendientes = new Array<any>();
    this.listadoEnPreparacion = new Array<any>();
  }

  ngOnInit() {
    this.traerPedidosPendientes();
    this.traerPedidosEnPreparacion();
  }

  traerPedidosPendientes() {
    this.miServicioPedido.traerPedidos(this.perfil, "pendiente")
      .then(data => {
        this.listadoPendientes = data;
      });
  }

  traerPedidosEnPreparacion() {
    this.miServicioPedido.traerPedidos(this.perfil, "en preparacion")
      .then(data => {
        this.listadoEnPreparacion = data;
        debugger;
        this.listadoEnPreparacion.forEach(function(pedido) {
          let fechaInicio = new Date(pedido.momentoInicio).getTime();
          let fechaFin = new Date().getTime();
          let diferencia = (fechaFin - fechaInicio) / (1000 * 60);
          pedido.esDemorado = diferencia > pedido.tiempoEstimado;
        });
      });
  }

  elegirPedido(idDetalle: number, tiempoEstimado: number) {
    let idLogueado: number = (JSON.parse(sessionStorage.getItem("sesion"))).id;
    this.miServicioPedido.comenzarDetalle(idDetalle, tiempoEstimado, idLogueado)
      .then(data => {
        this.traerPedidosPendientes();
        this.traerPedidosEnPreparacion();
      });
  }
}
