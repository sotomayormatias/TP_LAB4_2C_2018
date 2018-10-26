import { Component, OnInit } from '@angular/core';
import { ServicioMenuService } from "../../servicios/servicio-menu.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  miServicioMenu: ServicioMenuService;
  listado: Array<any>;

  constructor(servicioMenu: ServicioMenuService) {
    this.miServicioMenu = servicioMenu;
    this.traerComida();
  }

  ngOnInit() {
  }

  traerComida() {
    this.miServicioMenu.traerProductos("comida")
      .then(listadoComida => {
        this.listado = listadoComida;
      });
  }

}
