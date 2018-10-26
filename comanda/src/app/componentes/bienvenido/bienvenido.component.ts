import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  ingresarEmpleado(){
    console.log("hola");
    this.router.navigate(['/Login']);
  }

  ingresarCliente(){

  }
}
