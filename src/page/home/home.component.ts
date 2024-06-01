import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarrouselComponent } from 'src/shared/components/carrousel/carrousel.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule,CarrouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
