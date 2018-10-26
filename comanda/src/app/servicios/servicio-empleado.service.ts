import { Injectable } from '@angular/core';
import { ServicioGeneralService } from './servicio-general.service';

@Injectable()
export class ServicioEmpleadoService {

  filtrado: any;
  constructor(public miHttp: ServicioGeneralService) { }

  public traerTodos(ruta) {
    return this.miHttp.httpGetO(ruta)
      .toPromise()
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  }

  public guardar(ruta, objeto:any) {
    return this.miHttp.httpPostO(ruta, objeto)
      .toPromise()
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  }

  public loguearUsuario(ruta, objeto:any) {
    return this.miHttp.post(ruta, objeto);
  }

  public traerUnoPorUsuario(ruta, usuario) {
    return this.miHttp.httpGetO(ruta)
      .toPromise()
      .then(data => {
        this.filtrado = data;
        this.filtrado = this.filtrado.filter(data => data.usuario === usuario);
        return this.filtrado;
      }, err => {
        console.log(err);
      })
  }

  public borrarUno(ruta, id) {
    return this.miHttp.httpDeleteO(ruta, id)
      .toPromise()
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  }

}
