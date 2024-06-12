import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/page/home/home.component';
import { QuestionnaireComponent } from 'src/page/questionnaire/questionnaire.component';
import { SobreComponent } from 'src/page/sobre/sobre.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'questionario',
    component: QuestionnaireComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
