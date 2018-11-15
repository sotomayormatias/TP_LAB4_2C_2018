import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-socio',
  templateUrl: './principal-socio.component.html',
  styleUrls: ['./principal-socio.component.css']
})
export class PrincipalSocioComponent implements OnInit {
  dataGrafico: any;
  dataComidas: any;
  dataBebidas: any;
  dataPostres: any;
  dataGraficoEmpleado: any;
  usuarioLogueado: any;
  configGrafico: any;
  tipoData: string = "";

  constructor() {
    this.usuarioLogueado = JSON.parse(sessionStorage.getItem("sesion"));

    this.dataComidas = {
      labels: ['Pizza', 'Empanadas', 'Ravioles'],
      datasets: [
        {
          data: [10, 8, 3],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };

    this.dataBebidas = {
      labels: ['Cerveza', 'Vino', 'Agua'],
      datasets: [
        {
          data: [15, 9, 30],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };

    this.dataPostres = {
      labels: ['Helado', 'Flan'],
      datasets: [
        {
          data: [15, 15],
          backgroundColor: [
            "#FF6384",
            "#36A2EB"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB"
          ]
        }]
    };

    this.dataGraficoEmpleado = {
      labels: ['Roberto', 'Anibal', 'Marcelo', 'Carla', 'Julieta', 'Juan'],
      datasets: [
        {
          data: [34, 65, 12, 78, 90, 34],
          backgroundColor: [
            "#36A2EB",
            "#42f480",
            "#FF6384",
            "#f4e541",
            "#9a41f4",
            "#f44141"
          ],
          hoverBackgroundColor: [
            "#36A2EB",
            "#42f480",
            "#FF6384",
            "#f4e541",
            "#9a41f4",
            "#f44141"
          ]
        }]
    };

    this.configGrafico = {
      legend: {
        labels: {
          fontColor: 'white',
          fontSize: 16
        }
      }
    }
  }

  dataCsv = [
    {
      nombre: "Roberto",
      ventas: 34
    },
    {
      nombre: "Anibal",
      ventas: 65
    },
    {
      nombre: "Marcelo",
      ventas: 12
    },
    {
      nombre: "Carla",
      ventas: 78
    },
    {
      nombre: "Julieta",
      ventas: 90
    },
    {
      nombre: "Juan",
      ventas: 34
    }
  ];

  cabeceraCsv = ["Nombre", "Ventas"]
  
  ngOnInit() {
  }

  refrescarGrafico() {
    switch (this.tipoData) {
      case "comidas":
        this.dataGrafico = this.dataComidas;
        break;
      case "bebidas":
        this.dataGrafico = this.dataBebidas;
        break;
      case "postres":
        this.dataGrafico = this.dataPostres;
        break;
    }
  }
}
