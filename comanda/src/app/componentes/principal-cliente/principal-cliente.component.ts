import { Component, OnInit } from '@angular/core';
import { ServicioClienteService } from "../../servicios/servicio-cliente.service";

@Component({
  selector: 'app-principal-cliente',
  templateUrl: './principal-cliente.component.html',
  styleUrls: ['./principal-cliente.component.css']
})
export class PrincipalClienteComponent implements OnInit {

  listadoMesas: Array<any>;
  miServicioCliente: ServicioClienteService;
  mesa: number;

  constructor(servicioCliente: ServicioClienteService) {
    this.miServicioCliente = servicioCliente;
    this.traerMesas();
  }

  ngOnInit() {
  }

  traerMesas() {
    this.miServicioCliente.traerMesas()
      .then(data => {
        this.listadoMesas = data;
      });
  }

  seleccionarMesa(idMesa: number){
    this.mesa = idMesa;
  }

}
