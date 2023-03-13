import { Directive } from '@angular/core';
import { Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: true
})
export class BackgroundColorDirective {

  // change background color of element to red

  @Input() appBackgroundColor: string = 'red';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appBackgroundColor);
  }

}
