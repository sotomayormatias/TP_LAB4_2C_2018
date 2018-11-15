import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicioMenuService } from "../../servicios/servicio-menu.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  miServicioMenu: ServicioMenuService;
  listadoComida: Array<any>;
  listadoBebida: Array<any>;
  listadoPostre: Array<any>;
  pedido: Array<{ idProducto: number, cantidad: number }>;
  tipoMoneda: string = "peso";
  @Output() cargarPedido = new EventEmitter();

  constructor(servicioMenu: ServicioMenuService) {
    this.miServicioMenu = servicioMenu;
    this.traerProductos();
    this.pedido = new Array();
  }

  ngOnInit() {
  }

  traerProductos() {
    this.miServicioMenu.traerProductos("comida")
      .then(listado => {
        this.listadoComida = listado;
      });

    this.miServicioMenu.traerProductos("bebida")
      .then(listado => {
        this.listadoBebida = listado;
      });

    this.miServicioMenu.traerProductos("postre")
      .then(listado => {
        this.listadoPostre = listado;
      });
  }

  sumarAlPedido(idPrd: number) {
    let productoExistente = this.pedido.find(producto => producto.idProducto == idPrd);
    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      this.pedido.push({ idProducto: idPrd, cantidad: 1 });
    }
    this.sumarCantidad(idPrd);
  }

  restarAlPedido(idPrd: number) {
    let productoExistente = this.pedido.find(producto => producto.idProducto == idPrd);
    if (productoExistente) {
      productoExistente.cantidad--;
      if (productoExistente.cantidad == 0) {
        let index: number = this.pedido.indexOf(productoExistente);
        this.pedido.splice(index, 1);
      }
    }
    this.restarCantidad(idPrd);
  }

  sumarCantidad(idPrd: number) {
    let span = document.getElementById("cantidad_" + idPrd);
    let cantidad: number = span.textContent == "" ? 0 : +span.textContent;
    cantidad++;
    span.textContent = cantidad + "";
  }

  restarCantidad(idPrd: number) {
    let span = document.getElementById("cantidad_" + idPrd);
    let cantidad: number = span.textContent == "" ? 0 : +span.textContent;
    if (cantidad > 0)
      cantidad--;

    if (cantidad == 0)
      span.textContent = "";
    else
      span.textContent = cantidad + "";
  }

  generarPedido() {
    this.cargarPedido.emit(this.pedido);
  }

  cambiarMoneda() {
    debugger;
    if (this.tipoMoneda == 'peso')
      this.tipoMoneda = 'dolar';
    else
      this.tipoMoneda = 'peso';
  }
}
