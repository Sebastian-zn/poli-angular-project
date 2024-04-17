import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { CardTestimonioComponent } from '../card-testimonio/card-testimonio.component';

@Component({
  selector: 'app-testimonio',
  standalone: true,
  imports: [NgOptimizedImage, CardTestimonioComponent],
  templateUrl: './testimonio.component.html',
  styleUrl: './testimonio.component.css'
})
export class TestimonioComponent { }
