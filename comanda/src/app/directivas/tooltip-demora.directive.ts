import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltipDemora]'
})
export class TooltipDemoraDirective {
  @Input() tiempoDemora: number

  constructor(private element: ElementRef) { }

  @HostListener('mouseover') mouseover() {
    if (this.tiempoDemora > 0) {
      let audio = new Audio();
      audio.src = "../../assets/sonidos/win.mp3";
      audio.load();
      audio.play();
    }
  }
}
