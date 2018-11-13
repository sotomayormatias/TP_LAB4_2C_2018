import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appPassRobusta]'
})
export class PassRobustaDirective implements OnChanges {
  @Input() password: string;

  constructor(private element: ElementRef) { }

  ngOnChanges() {
    if (this.password.length > 0 && this.password.length < 4) {
      this.element.nativeElement.style.backgroundColor = '#f44242';
    }
    
    if(this.password.length >= 4 && this.password.length < 8){
      this.element.nativeElement.style.backgroundColor = '#f4e841';
    }
    
    if (this.password.length >= 8) {
      this.element.nativeElement.style.backgroundColor = '#4ff441';
    }
  }
}
