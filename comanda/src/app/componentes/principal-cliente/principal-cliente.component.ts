import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServicioClienteService } from "../../servicios/servicio-cliente.service";

@Component({
  selector: 'app-principal-cliente',
  templateUrl: './principal-cliente.component.html',
  styleUrls: ['./principal-cliente.component.css']
})
export class PrincipalClienteComponent implements OnInit {

  listadoMesas: Array<any>;
  miServicioCliente: ServicioClienteService;
  mesaElegida: any;
  mesaIncorrecta: boolean = false;
  mesaOcupada: boolean = false;
  nombreUsuario: string; 

  constructor(private builder: FormBuilder,
    servicioCliente: ServicioClienteService) {
    this.miServicioCliente = servicioCliente;
    this.traerMesas();
  }

  ngOnInit() {
  }

  nombre = new FormControl('', [
    Validators.required
  ]);

  codigoMesa = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  registroForm: FormGroup = this.builder.group({
    nombre: this.nombre,
    codigoMesa: this.codigoMesa
  });

  traerMesas() {
    this.miServicioCliente.traerMesas('todas')
      .then(data => {
        this.listadoMesas = data;
      });
  }

  seleccionarMesa() {
    this.mesaIncorrecta = false;
    this.mesaOcupada = false;
    this.nombreUsuario = this.registroForm.get('nombre').value;
    this.mesaElegida = this.listadoMesas.find(mesa => mesa.codigo == this.codigoMesa.value);
    if (!this.mesaElegida)
      this.mesaIncorrecta = true;
    else if (this.mesaElegida.estado != "cerrada")
      this.mesaOcupada = true;
    else
      this.ocuparMesa();
  }

  ocuparMesa() {
    this.miServicioCliente.ocuparMesa(this.mesaElegida.id, "con cliente esperando atencion");
  }
}
