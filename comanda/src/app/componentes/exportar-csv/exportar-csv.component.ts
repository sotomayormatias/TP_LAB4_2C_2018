import { Component, OnInit, Input } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-exportar-csv',
  templateUrl: './exportar-csv.component.html',
  styleUrls: ['./exportar-csv.component.css']
})
export class ExportarCsvComponent implements OnInit {
  @Input() nombreArchivo: string;
  @Input() datosAExportar: string;
  @Input() cabecera: string[];

  options = {
    fieldSeparator: ';',
    quoteStrings: '"',
    decimalseparator: '.',
    headers: []
  };

  constructor() { }

  ngOnInit() {
    this.options.headers = this.cabecera;
  }

  exportarCsv() {
    new Angular2Csv(this.datosAExportar, this.nombreArchivo, this.options);
  }
}
