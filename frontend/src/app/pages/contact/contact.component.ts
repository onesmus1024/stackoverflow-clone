import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  email = 'onesmus@stackoverflow.com'
  phone = '254 700 000 000'
  address = 'Nairobi, Kenya'
  facebook = 'https://www.facebook.com/'
  twitter = 'https://twitter.com'
  linkedin = 'https://www.linkedin.com/in/'
  instagram = 'https://www.instagram.com/'

}
