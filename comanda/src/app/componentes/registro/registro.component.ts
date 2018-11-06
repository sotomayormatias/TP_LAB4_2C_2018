import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServicioEmpleadoService } from "../../servicios/servicio-empleado.service";

function copiaClave(input: FormControl) {

  if (input.root.get('clave') == null) {
    return null;
  }

  const verificar = input.root.get('clave').value === input.value;
  return verificar ? null : { mismaClave: true };
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  miServicioEmpleado: ServicioEmpleadoService;

  constructor(private builder: FormBuilder,
    servicioEmpleado: ServicioEmpleadoService) {
      this.miServicioEmpleado = servicioEmpleado;
     }

  usuario = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  nombre = new FormControl('', [
    Validators.required
  ]);

  estado = new FormControl('', [
    Validators.required
  ]);

  perfil = new FormControl('', [
    Validators.required
  ]);

  clave = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  copiaClave = new FormControl('', [
    Validators.required,
    copiaClave
  ]);
  
  captcha = new FormControl('', [
    Validators.required
  ]);

  registroForm: FormGroup = this.builder.group({
    usuario: this.usuario,
    nombre: this.nombre,
    estado: this.estado,
    perfil: this.perfil,
    clave: this.clave,
    copiaClave: this.copiaClave,
    captcha: this.captcha
  });

  ngOnInit() {
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  Registrar() {
    let usuario = this.registroForm.get('usuario').value;
    let nombre = this.registroForm.get('nombre').value;
    let estado = this.registroForm.get('estado').value;
    let perfil = this.registroForm.get('perfil').value;
    let clave = this.registroForm.get('clave').value;
    
    this.miServicioEmpleado.registrarUsuario('Empleados', {usuario, nombre, estado, perfil, clave})
    .then(data => {
      if(data.ultimoIdGrabado > 0){
        this.MensajeRegistro();
        this.registroForm.reset();
      }
    });
  }

  MensajeRegistro() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

}
