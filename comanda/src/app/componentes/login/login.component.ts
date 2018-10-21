import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder: FormBuilder) { }

  email = new FormControl('', [
    Validators.required,
    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
  ]);

  clave = new FormControl('', [
    Validators.required
  ]);

  registroForm: FormGroup = this.builder.group({
    email: this.email,
    clave: this.clave
  });

  Ingresar(){
    alert("Usuario Logueado");
    console.log(this.registroForm.get('email').value); 
  }

  ngOnInit(){}

}
