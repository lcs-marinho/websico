import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Router } from '@angular/router';
import { EnqueteService } from 'src/shared/service/enquete.service';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [CommonModule, FormsModule, UpperCasePipe],
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  animations: [
    trigger('questionAnimation', [
      transition(':increment', [
        style({
          position: 'relative',
          opacity: 0,
          transform: 'translateY(20%)',
        }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':decrement', [
        style({
          position: 'relative',
          opacity: 0,
          transform: 'translateY(-20%)',
        }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class QuestionnaireComponent {
  
  pollForm = this.fb.group({
    nome: ['', Validators.required],
    faixaEtaria: ['', Validators.required],
    sexo: ['', Validators.required],
    estado: ['', Validators.required],
    ouviuFalarDeAvaliacaoPsicologica: ['', Validators.required],
    participouDeAvaliacaoPsicologica: ['', Validators.required],
    experienciaParticipacao: ['', Validators.required],
    motivacao: ['', Validators.required],
    interesseFuturo: ['', Validators.required],
    comentario: ['', Validators.required],
  });

  currentQuestionIndex: number = 0;
  questions = [
    { question: 'Qual é o seu nome?', type: 'text', answer: '' },
    {
      question: 'Qual sua faixa etária?',
      type: 'select',
      options: [
        '14-19 anos',
        '20-29 anos',
        '30-39 anos',
        '40-49 anos',
        '50-59 anos',
        '60-69 anos',
        '70 anos ou +',
      ],
      answer: '',
    },
    {
      question: 'Seu sexo',
      type: 'radio',
      options: ['Masculino', 'Feminino', 'Prefiro não responder'],
      answer: '',
    },
    {
      question: 'Estado em que reside',
      type: 'select',
      options: [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MG',
        'MS',
        'MT',
        'NE',
        'PA',
        'PB',
        'PE',
        'PI',
        'PR',
        'RJ',
        'RN',
        'RO',
        'RR',
        'SC',
        'SE',
        'SP',
        'TO',
      ],
      answer: '',
    },
    {
      question: 'Você já ouviu falar de avaliação psicológica?',
      type: 'radio',
      options: ['Sim', 'Não'],
      answer: '',
    },
    {
      question: 'Já participou de um processo de avaliação psicológica?',
      type: 'radio',
      options: ['Sim', 'Não'],
      answer: '',
    },
    {
      question: 'Como foi sua experiência ao participar?',
      type: 'radio',
      options: ['Excelente', 'Boa', 'Regular', 'Ruim', 'Péssima'],
      answer: '',
    },
    {
      question: 'Qual foi sua motivação?',
      type: 'select',
      options: [
        'Encaminhamento médico',
        'Interesse próprio',
        'Contexto profissional',
        'Contexto escolar',
        'Psicotécnico',
        'Não se aplica',
        'Indicação de parentesco',
        'Outros',
      ],
      answer: '',
    },
    // Caso nao saiba, o que é avaliação psicologica
    {
      question:
        'Teria interesse em aprender/particiar de uma futura avaliação?',
      type: 'radio',
      options: ['Sim', 'Não'],
      answer: '',
    },
    {
      question:
        'Acredita que a avaliação psicológica seja importante? Deixe um comentário sobre a sua opinião!',
      type: 'text',
      answer: '',
    },
    {
      question: 'Parabéns! Chegamos ao fim do formulário. Agora é só clicar em ENVIAR!',
    },
  ];

  constructor(private router: Router, private enqueteService: EnqueteService, private fb: FormBuilder) { }

  nextQuestion() {
    if (this.questions[4].answer == 'Não' && this.currentQuestionIndex == 4) {
      this.currentQuestionIndex = 8;
      return;
    }

    if (this.questions[5].answer == 'Não' && this.currentQuestionIndex == 5) {
      this.currentQuestionIndex = 9;
      return;
    }

    if (this.currentQuestionIndex == 7) {
      this.currentQuestionIndex = 9;
      return;
    }

    if (this.currentQuestionIndex == 8) {
      this.currentQuestionIndex = 10;
      return;
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex == 8) {
      this.currentQuestionIndex = 4;
      return;
    }

    if (this.questions[5].answer == 'Não' && this.currentQuestionIndex == 9) {
      this, (this.currentQuestionIndex = 5);
      return;
    }

    if (this.questions[4].answer == 'Sim' && this.currentQuestionIndex == 9) {
      this.currentQuestionIndex = 7;
      return;
    }

    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex = this.currentQuestionIndex - 1;
    }
  }

  navigate(rota: string) {
    this.router.navigate([rota])
  }

  submitForm() {
    this.pollForm.setValue({
      nome: this.questions[0].answer!,
      faixaEtaria: this.questions[1].answer!,
      sexo: this.questions[2].answer!,
      estado: this.questions[3].answer!,
      ouviuFalarDeAvaliacaoPsicologica: this.questions[4].answer!,
      participouDeAvaliacaoPsicologica: this.questions[5].answer!,
      experienciaParticipacao: this.questions[6].answer!,
      motivacao: this.questions[7].answer!,
      interesseFuturo: this.questions[8].answer!,
      comentario: this.questions[9].answer!,
    });

    this.enqueteService.sendResponse(this.pollForm.value).subscribe({
      next: (success: any) => {
        this.msgRequest = success.success;
        this.msgRequest2 = 'Tudo certo por aqui, obrigado por participar!'
      },
      error: (err: any) => {
        this.msgRequest = 'Algo deu errado';
        this.msgRequest2 = 'Tente novamente mais tarde!'
      }
    })

  }

  msgRequest?: string;
  msgRequest2?: string;
}
