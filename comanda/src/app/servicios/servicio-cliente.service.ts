import { Injectable } from '@angular/core';
import { ServicioGeneralService } from './servicio-general.service';

@Injectable()
export class ServicioClienteService {

  constructor(public miHttp: ServicioGeneralService) { }

  traerMesas(): Promise<Array<any>> {
    return this.miHttp.get("Mesas")
      .then((data:Array<any>) => {
        return data;
      });
  }
}
