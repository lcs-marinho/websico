import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

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
      name: 'João',
      message: 'Comentário 1',
      imageUrl: 'assets/img/homem1.jpeg'
    },
    {
      name: 'Maria',
      message: 'Comentário 2',
      imageUrl: 'assets/img/mulher1.jpeg'
    },
    {
      name: 'Carlos',
      message: 'Comentário 3',
      imageUrl: 'assets/img/homem2.jpeg'
    },
    {
      name: 'Ana',
      message: 'Comentário 4',
      imageUrl: 'assets/img/mulher2.jpeg'
    },
    {
      name: 'Beatriz',
      message: 'Comentário 5',
      imageUrl: 'assets/img/mulher3.jpeg'
    },
    {
      name: 'Pedro',
      message: 'Comentário 6',
      imageUrl: 'assets/img/homem3.jpeg'
    },
    {
      name: 'Matheus',
      message: 'Comentário 7',
      imageUrl: 'assets/img/homem1.jpeg'
    },
    {
      name: 'Bianca',
      message: 'Comentário 8',
      imageUrl: 'assets/img/mulher1.jpeg'
    },
    {
      name: 'Gabriel',
      message: 'Comentário 9',
      imageUrl: 'assets/img/homem2.jpeg'
    },
    {
      name: 'Beatriz',
      message: 'Comentário 10',
      imageUrl: 'assets/img/mulher2.jpeg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.comments = this.duplicateComments(this.comments);
  }

  duplicateComments(comments: Comment[]): Comment[] {
    return [...comments, ...comments];
  }
}