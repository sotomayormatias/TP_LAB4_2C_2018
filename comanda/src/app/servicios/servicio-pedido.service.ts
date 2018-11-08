import { Injectable } from '@angular/core';
import { ServicioGeneralService } from './servicio-general.service';

@Injectable()
export class ServicioPedidoService {

  constructor(public miHttp: ServicioGeneralService) { }

  public generarPedido(idMesa: number){
    return this.miHttp.post("Pedidos", {idMesa});
  }
}
