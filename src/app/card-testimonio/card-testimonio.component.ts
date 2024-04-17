import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-testimonio',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card-testimonio.component.html',
  styleUrl: './card-testimonio.component.css'
})
export class CardTestimonioComponent {
  testimonio = ""
  nombre = ""
  empresa = ""
}
