import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDirective } from 'src/app/directives/modal.directive';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalDirective],  
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @ViewChild(ModalDirective , {static: true}) modalHost!: ModalDirective;
  @ViewChild('modal') modal!: ModalDirective;

  constructor(private router: Router) { }

  title = 'frontend';
  body = 'body';


  close() {

    this.router.navigate(['/home']);

  }
}
