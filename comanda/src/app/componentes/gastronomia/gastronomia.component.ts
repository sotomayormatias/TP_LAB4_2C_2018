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

  traerPedidosPendientes(){
    this.miServicioPedido.traerPedidos(this.perfil, "pendiente")
    .then(data => {
      this.listadoPendientes = data;
    });
  }

  traerPedidosEnPreparacion(){
    this.miServicioPedido.traerPedidos(this.perfil, "en preparacion")
    .then(data => {
      this.listadoEnPreparacion = data;
    });
  }
}
