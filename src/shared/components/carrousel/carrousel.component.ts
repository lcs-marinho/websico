import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent {
  index = 0;

  content = [
    {
      router: '',
      img: 'assets/img/img_1.jpg',
      title: 'WebSico',
      description: 'Sinergia entre a psicologia e os avanços tecnológicos',
    },
    {
      router: '',
      img: 'assets/img/img_2.jpg',
      title: 'WebSico',
      description: 'Sinergia entre a psicologia e os avanços tecnológicos',
    },
    {
      router: '',
      img: 'assets/img/img_3.jpg',
      title: 'WebSico',
      description: 'Sinergia entre a psicologia e os avanços tecnológicos',
    },
    {
      router: '',
      img: 'assets/img/img_4.jpg',
      title: 'WebSico',
      description: 'Sinergia entre a psicologia e os avanços tecnológicos',
    },
  ];

  ngOnInit(): void {
   
  }
}
