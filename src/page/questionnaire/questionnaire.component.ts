import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [CommonModule, FormsModule, UpperCasePipe],
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  animations: [
    trigger('questionAnimation', [
      transition(':increment', [
        style({ position: 'relative', opacity: 0,  transform: 'translateY(20%)' }),
        animate('500ms ease-out', style({ opacity: 1 ,  transform: 'translateY(0)'}))
      ]),
      transition(':decrement', [
        style({ position: 'relative', opacity: 0,  transform: 'translateY(-20%)'}),
        animate('500ms ease-out', style({ opacity: 1,  transform: 'translateY(0)'}))
      ])
    ])
  ]
})
export class QuestionnaireComponent {
  currentQuestionIndex: number = 0;
  questions = [
    { question: 'Qual é o seu nome?', type: 'text', answer: '' },
    { question: 'Qual é a sua idade?', type: 'number', answer: '' },
    { question: 'Seu sexo', type: 'radio', options: ['Masculino', 'Feminino', 'Prefiro não responder'], answer: '' },
    { 
      question: 'Estado em que reside', 
      type: 'select', 
      options: [
        'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'NE', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'SC', 'SE', 'SP', 'TO'], 
      answer: ''
    },
    { 
      question: 'Você sabe o que é uma avaliação psicológica?', 
      type: 'radio', 
      options: ['Sim', 'Não', 'Não tenho certeza'], 
      answer: '' 
    },
    { 
      question: 'Você sabe o que é uma avaliação psicológica?', 
      type: 'radio', 
      options: ['Sim', 'Não', 'Não tenho certeza'], 
      answer: '' 
    },
    { 
      question: 'AGORA É SÓ ENVIAR', 
    }
  ];

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex = this.currentQuestionIndex - 1;
    }
  }

  submitForm() {
    // Aqui você pode enviar os dados para um backend ou processá-los conforme necessário
    console.log(this.questions[0].answer)
  }
}
