import { Component } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';


@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
