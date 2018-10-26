import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServicioEmpleadoService } from "../../servicios/servicio-empleado.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miServicioEmpleado: ServicioEmpleadoService;

  constructor(private builder: FormBuilder,
    private router: Router,
    servicioEmpleado: ServicioEmpleadoService) {
    this.miServicioEmpleado = servicioEmpleado;
  }


  email = new FormControl('', [
    Validators.required,
    // Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
  ]);

  clave = new FormControl('', [
    Validators.required
  ]);

  registroForm: FormGroup = this.builder.group({
    email: this.email,
    clave: this.clave
  });

  Ingresar() {
    let usuario = this.registroForm.get('email').value;
    let clave = this.registroForm.get('clave').value;
    this.miServicioEmpleado.loguearUsuario('Sesion', {usuario, clave})
    .then(data => {
      if(data && data.token){
        console.log(data);
        sessionStorage.setItem("sesion", JSON.stringify(data.datos));
        this.router.navigate(['/Principal']);
      }
      else {
        alert("usuario o contraseña incorrectos");
      }
    });
  }

  ngOnInit() { }

}
