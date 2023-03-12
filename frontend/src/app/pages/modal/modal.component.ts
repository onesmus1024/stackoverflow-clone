import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDirective } from 'src/app/directives/modal.directive';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @ViewChild(ModalDirective , {static: true}) modalHost!: ModalDirective;


  title = 'frontend';
  body = 'body';


  close() {

    return this.modalHost.close();

  }
}
