import { Injectable } from '@angular/core';
import { ServicioGeneralService } from './servicio-general.service';

@Injectable()
export class ServicioClienteService {

  filtroMesa: Array<any>;
  constructor(public miHttp: ServicioGeneralService) { }

  traerMesas(estado: string): Promise<Array<any>> {
    return this.miHttp.get("Mesas")
      .then((data:Array<any>) => {
        this.filtroMesa = data;
        this.filtroMesa = this.filtroMesa.filter(data => estado == 'todas' || data.estado == estado);
        return this.filtroMesa;
      });
  }

  ocuparMesa(idMesa: number, estado: string){
    this.miHttp.post("Mesas/Estado", {idMesa, estado});
  }
}
