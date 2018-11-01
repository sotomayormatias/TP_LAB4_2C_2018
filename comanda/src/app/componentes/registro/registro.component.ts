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

  registroForm: FormGroup = this.builder.group({
    usuario: this.usuario,
    clave: this.clave,
    copiaClave: this.copiaClave,
  });

  ngOnInit() {
  }

  Registrar(){
    
    console.log(this.registroForm.get('usuario').value); 
  }

}
