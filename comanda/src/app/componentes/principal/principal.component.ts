import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuarioLogueado: any;
  esGastronomico: boolean = false;
  esMozo: boolean = false;

  constructor() {
    this.usuarioLogueado = JSON.parse(sessionStorage.getItem("sesion"));
    this.determinarPerfil();
  }

  ngOnInit() {
  }

  determinarPerfil() {
    this.esGastronomico = 'bartender candy cervecero cocinero'.includes(this.usuarioLogueado.perfil);
    this.esMozo = 'mozo'.includes(this.usuarioLogueado.perfil);
  }

}
