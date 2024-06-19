import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { EnqueteService } from "src/shared/service/enquete.service";

export interface Comment {
  name: string;
  message: string;
  imageUrl: string;
}

@Component({
  selector: "app-content-four",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./content-four.component.html",
  styleUrls: ["./content-four.component.scss"]
})

export class ContentFourComponent implements OnInit {
  comments: Comment[] = [
    {
      name: 'Lucas',
      message: 'creio que sim, muito importante para identificar possíveis problemas psicológicos e etc...',
      imageUrl: 'assets/img/homem1.jpeg'
    },
    {
      name: 'Letícia',
      message: 'Extremamente importante. Nos ajuda a entender que somos a aprendemos a lhe dar com as adversidade do mundo.',
      imageUrl: 'assets/img/mulher1.jpeg'
    },
    {
      name: 'DIERE EVE FELIX DA SILVA',
      message: 'Sim.entendimento do comportamento pessoal . saúde mental,Desenvolvimento pessoal.etc.',
      imageUrl: 'assets/img/homem2.jpeg'
    },
    {
      name: 'Sebastiana dos Santos',
      message: 'Sim.Porque nos ajuda a enfrentar traumas e problemas do nosso dia a dia.',
      imageUrl: 'assets/img/mulher2.jpeg'
    },
    {
      name: 'Angela',
      message: 'Sim, Avaliar se uma pessoa esta apta psicologicamente para exercer uma função e importante',
      imageUrl: 'assets/img/mulher3.jpeg'
    },
    {
      name: 'Milton Neves',
      message: 'Sim! Para podermos alinhar os sentimentos, organizar os pensamentos e outras situações mais.',
      imageUrl: 'assets/img/homem3.jpeg'
    },
    {
      name: 'Matheus',
      message: 'Sim, minha esposa é psicóloga e vejo muita importância no seu trabalho clínico.',
      imageUrl: 'assets/img/homem1.jpeg'
    },
    {
      name: 'Eliane Moreira',
      message: 'Sim, através de uma boa avaliação psicológica podemos escolher melhor as pessoas que irão trabalhar conosco, se sabem trabalhar em grupo ou se apresentam algum desvio de personalidade',
      imageUrl: 'assets/img/mulher1.jpeg'
    },
    {
      name: 'Felipe',
      message: 'Sim. A avaliação psicológica é crucial para diagnósticos precisos e intervenções eficazes em diversos contextos, promovendo saúde e bem-estar.',
      imageUrl: 'assets/img/homem2.jpeg'
    },
    {
      name: 'Beatriz',
      message: 'Sim. A avaliação psicológica é muito importante! Tanto para diagnosticar, quanto para compreender e lidar com as questões mentais e comportamentais.',
      imageUrl: 'assets/img/mulher2.jpeg'
    }
  ];

  constructor(private enqueteService: EnqueteService) { }

  ngOnInit(): void {
    this.comments = this.duplicateComments(this.comments);
  }

  duplicateComments(comments: Comment[]): Comment[] {
    return [...comments, ...comments];
  }

  
}