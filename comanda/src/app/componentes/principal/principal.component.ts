import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuarioLogueado: any;
  constructor() {
    this.usuarioLogueado = JSON.parse(sessionStorage.getItem("sesion"));
    console.log(this.usuarioLogueado);
  }

  ngOnInit() {
  }

}
