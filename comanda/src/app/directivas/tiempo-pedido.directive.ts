import { Directive, Input, Renderer, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTiempoPedido]'
})
export class TiempoPedidoDirective {
  @Input() esDemorado: boolean;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    if (this.esDemorado) {
      this.element.nativeElement.style.backgroundColor = '#F44242';
    }
  }
}
