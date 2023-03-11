import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModal]',
  standalone: true,
})
export class ModalDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
