import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphGenderComponent } from 'src/shared/components/graph-gender/graph-gender.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,GraphGenderComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
}
