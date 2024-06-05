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

  poll?: {
    nome: string
    faixaEtaria: string
    sexo: string
    estado: string
    ouviuFalarDeAvaliacaoPsicologica: string
    participouDeAvaliacaoPsicologica: string
    experienciaParticipacao: string
    motivacao: string
    interesseFuturo: string
    importanciaAvaliacaoPsicologicaComentario: ""
  };

  currentQuestionIndex: number = 0;
  questions = [
    { question: 'Qual é o seu nome?', type: 'text', answer: '' },
    { question: 'Qual sua faixa etária?', type: 'select', options: ['3-18 anos','19-29  anos','30-39  anos','40-49  anos','50-59 anos','60-69 anos'] ,answer: '' },
    { question: 'Seu sexo', type: 'radio', options: ['Masculino', 'Feminino', 'Prefiro não responder'], answer: '' },
    { 
      question: 'Estado em que reside', 
      type: 'select', 
      options: [
        'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'NE', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'SC', 'SE', 'SP', 'TO'], 
      answer: ''
    },
    { 
      question: 'Você já ouviu falar de avaliação psicológica?', 
      type: 'radio', 
      options: ['Sim', 'Não'], 
      answer: '' 
    },
    { 
      question: 'Já participou de um processo de avaliação psicológica?', 
      type: 'radio', 
      options: ['Sim', 'Não'], 
      answer: '' 
    },
    { 
      question: 'Como foi sua experiência ao participar?', 
      type: 'radio', 
      options: ['Excelente', 'Boa','Regular','Ruim','Péssima','Não participei'], 
      answer: '' 
    },
    { 
      question: 'Qual foi sua motivação?', 
      type: 'select', 
      options: ['Encaminhamento médico', 'Interesse próprio','Contexto profissional','Contexto escolar','Psicotécnico','Não se aplica','Indicação de parentesco', 'Outros'], 
      answer: '' 
    },
    // Caso nao saiba, o que é avaliação psicologica
    { 
      question: 'Teria interesse em aprender/particiar de uma futura avaliação?', 
      type: 'radio', 
      options: ['Sim','Não'], 
      answer: '' 
    },
    { 
      question: 'Acredita que avaliação psicológica seja importante? Deixe um comentário!', 
      type: 'text', 
      answer: '' 
    },
    { 
      question: 'AGORA É SÓ ENVIAR', 
    }
  ];

  nextQuestion() {
    
    if(this.questions[4].answer == 'Não' && this.currentQuestionIndex == 4 ) {
      this.currentQuestionIndex = 8;
      return;
    }

    if(this.currentQuestionIndex == 7 ) {
      this.currentQuestionIndex = 9;
      return;
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {

    if(this.currentQuestionIndex == 8) {
      this.currentQuestionIndex = 4;
      return;
    }

    if(this.questions[4].answer == 'Sim' && this.currentQuestionIndex == 9) {
      this.currentQuestionIndex = 7;
      return;
    }

    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex = this.currentQuestionIndex - 1;
    }
  }

  submitForm() {
    // Aqui você pode enviar os dados para um backend ou processá-los conforme necessário
    console.log(this.questions[0].answer)
  }
}
