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

  determinarPerfil(){
    this.esGastronomico = 'bartender candy cervecero cocinero'.includes(this.usuarioLogueado.perfil);
    this.esMozo = 'mozo'.includes(this.usuarioLogueado.perfil);
  }


  // data = [
  //   {
  //     name: "Test 1",
  //     age: 13,
  //     average: 8.2,
  //     approved: true,
  //     description: "using 'Content here, content here' "
  //   },
  //   {
  //     name: 'Test 2',
  //     age: 11,
  //     average: 8.2,
  //     approved: true,
  //     description: "using 'Content here, content here' "
  //   },
  //   {
  //     name: 'Test 4',
  //     age: 10,
  //     average: 8.2,
  //     approved: true,
  //     description: "using 'Content here, content here' "
  //   },
  // ];
   
  // new Angular2Csv(data, 'My Report');




}
