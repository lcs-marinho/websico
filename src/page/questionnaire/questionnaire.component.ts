import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  animations: [
    trigger('questionAnimation', [
      transition(':increment', [
        style({ position: 'relative', opacity: 0 }),
        animate('700ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':decrement', [
        style({ position: 'relative', opacity: 0 }),
        animate('700ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class QuestionnaireComponent {
  currentQuestionIndex: number = 0;
  questions = [
    { question: 'Qual é o seu nome?', type: 'text', answer: '' },
    { question: 'Qual é o seu email?', type: 'email', answer: '' },
    { question: 'Qual é a sua idade?', type: 'number', answer: '' },
    { 
      question: 'Quais são seus hobbies?', 
      type: 'checkbox', 
      options: ['Ler', 'Esportes', 'Música', 'Viagens'], 
      answer: [] 
    },
    { 
      question: 'Qual seu gênero?', 
      type: 'radio', 
      options: ['Masculino', 'Feminino', 'Outro'], 
      answer: '' 
    },
    { 
      question: 'Qual é o seu país?', 
      type: 'select', 
      options: ['Brasil', 'Estados Unidos', 'Canadá'], 
      answer: '' 
    }
  ];

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  submitForm() {
    console.log(this.questions);
    // Aqui você pode enviar os dados para um backend ou processá-los conforme necessário
  }
}
