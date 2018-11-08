import { Injectable } from '@angular/core';
import { ServicioGeneralService } from './servicio-general.service';

@Injectable()
export class ServicioMenuService {
  filtrado: Array<any>;

  constructor(public miHttp: ServicioGeneralService) { }

  traerProductos(tipoComida: string): Promise<Array<any>> {
    return this.miHttp.get("Productos")
      .then((data:Array<any>) => {
        this.filtrado = data;
        this.filtrado = this.filtrado.filter(data => tipoComida == 'todos' || data.tipo === tipoComida);
        return this.filtrado;
      });
  }
}
