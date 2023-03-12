import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModal]',
  standalone: true,
})
export class ModalDirective {
  close() {
    throw new Error('Method not implemented.');
  }

  constructor(public viewContainerRef: ViewContainerRef) { }

}
