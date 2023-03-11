import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  @Input() loading = true;

}
