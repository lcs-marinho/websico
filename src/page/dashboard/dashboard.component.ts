import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Renderer2,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphGenderComponent } from 'src/shared/components/graph-gender/graph-gender.component';
import { GraphAgeComponent } from 'src/shared/components/graph-age/graph-age.component';
import { GraphStateComponent } from 'src/shared/components/graph-state/graph-state.component';
import { GraphPsychologyFormComponent } from 'src/shared/components/graph-psychology-form/graph-psychology-form.component';
import { GraphPsychologyProcessComponent } from 'src/shared/components/graph-psychology-process/graph-psychology-process.component';
import { GraphInteresseComponent } from 'src/shared/components/graph-interesse/graph-interesse.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    GraphGenderComponent,
    GraphAgeComponent,
    GraphStateComponent,
    GraphPsychologyFormComponent,
    GraphPsychologyProcessComponent,
    GraphInteresseComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {}
