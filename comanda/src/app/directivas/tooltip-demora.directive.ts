import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltipDemora]'
})
export class TooltipDemoraDirective {
  @Input() tiempoDemora: number

  constructor(private element: ElementRef) { }

  @HostListener('mouseover') mouseover() {
    let audio = new Audio();
    if (1 < this.tiempoDemora && this.tiempoDemora < 2)
      audio.src = "../../assets/sonidos/1_minuto.mp3";
    if (2 < this.tiempoDemora && this.tiempoDemora < 3)
      audio.src = "../../assets/sonidos/2_minuto.mp3";
    if (3 < this.tiempoDemora && this.tiempoDemora < 4)
      audio.src = "../../assets/sonidos/3_minuto.mp3";
    if (4 < this.tiempoDemora && this.tiempoDemora < 5)
      audio.src = "../../assets/sonidos/4_minuto.mp3";
    if (5 < this.tiempoDemora && this.tiempoDemora < 6)
      audio.src = "../../assets/sonidos/5_minuto.mp3";
    if (6 < this.tiempoDemora && this.tiempoDemora < 7)
      audio.src = "../../assets/sonidos/6_minuto.mp3";
    if (7 < this.tiempoDemora && this.tiempoDemora < 8)
      audio.src = "../../assets/sonidos/7_minuto.mp3";
    if (8 < this.tiempoDemora && this.tiempoDemora < 9)
      audio.src = "../../assets/sonidos/8_minuto.mp3";
    if (9 < this.tiempoDemora && this.tiempoDemora < 10)
      audio.src = "../../assets/sonidos/9_minuto.mp3";
    if (10 < this.tiempoDemora)
      audio.src = "../../assets/sonidos/mas10_minuto.mp3";

    audio.load();
    audio.play();
  }
}
