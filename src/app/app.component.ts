import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TestimonioComponent } from './testimonio/testimonio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TestimonioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  // Services copy array
  services = [
    {
      title: 'Desarrollo Web',
      paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, nostrum consequatur praesentium esse asperiores id perspiciatis cum fuga repellat namLorem ipsum dolor, sit amet consectetur adipisicing elit. Quam commodi dolor porro, rem eos sit optio facere dicta obcaecati voluptas veniam esse, voluptatum provident nihil aspernatur deserunt possimus qui incidunt',
      likes: '25'
    },
    {
      title: 'Diseño Web',
      paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, nostrum consequatur praesentium esse asperiores id perspiciatis cum fuga repellat namLorem ipsum dolor, sit amet consectetur adipisicing elit. Quam commodi dolor porro, rem eos sit optio facere dicta obcaecati voluptas veniam esse, voluptatum provident nihil aspernatur deserunt possimus qui incidunt',
      likes: '50'
    },
    {
      title: 'Bots',
      paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, nostrum consequatur praesentium esse asperiores id perspiciatis cum fuga repellat namLorem ipsum dolor, sit amet consectetur adipisicing elit. Quam commodi dolor porro, rem eos sit optio facere dicta obcaecati voluptas veniam esse, voluptatum provident nihil aspernatur deserunt possimus qui incidunt',
      likes: '108'
    },
  ]

}
