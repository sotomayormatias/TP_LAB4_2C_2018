import { Injectable } from '@angular/core';
import { ServicioGeneralService } from './servicio-general.service';

@Injectable()
export class ServicioPedidoService {

  filtroPedido: Array<any>;
  constructor(public miHttp: ServicioGeneralService) { }

  public generarPedido(idMesa: number, pedido: any){
    return this.miHttp.post("Pedidos", {idMesa, pedido});
  }

  public traerPedidos(perfil: string, estado: string): Promise<Array<any>> {
    return this.miHttp.get("Pedidos")
      .then((data:Array<any>) => {
        console.log(JSON.stringify(data));
        this.filtroPedido = data;
        this.filtroPedido = this.filtroPedido.filter(data => data.perfil == perfil && data.estado == estado);
        return this.filtroPedido;
      });
  }

  public comenzarDetalle(idDetalle: number, tiempoEstimado: number, idEmpleado: number){
    return this.miHttp.post("Pedidos/Comenzar", {idDetalle, tiempoEstimado, idEmpleado});
  }
}
