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
      title: 'Websico',
      description: 'Sinergia entre a psicologia e os avanços tecnológicos',
    },
    {
      router: '',
      img: 'assets/img/img_2.jpg',
      title: 'Deixe sua opinião!',
      description: 'Talvez você apareça nos comentários ao final da página',
    },
    // {
    //   router: '',
    //   img: 'assets/img/img_3.jpg',
    //   title: 'Websico',
    //   description: 'Respostas no menu Dashboards',
    // },
    {
      router: '',
      img: 'assets/img/img_4.jpg',
      title: 'Revolução Digital na Psicologia ',
      description: 'Já pensou como o mundo vai se tornar cada vez mais digital?',
    },
  ];

  ngOnInit(): void {
   
  }
}
