import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarrouselComponent } from 'src/shared/components/carrousel/carrousel.component';
import { ContentOneComponent } from 'src/shared/components/content-one/content-one.component';
import { ContentThirdComponent } from 'src/shared/components/content-third/content-third.component';
import { ContentTwoComponent } from 'src/shared/components/content-two/content-two.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule,CarrouselComponent, ContentOneComponent, ContentTwoComponent ,ContentThirdComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
