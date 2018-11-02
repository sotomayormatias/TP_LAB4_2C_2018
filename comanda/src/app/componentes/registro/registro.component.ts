import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  constructor(private builder: FormBuilder) { }

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
    // console.log(this.registroForm.get('usuario').value);
  }

}
