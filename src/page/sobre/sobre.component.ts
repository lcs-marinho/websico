import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sobre",
  standalone: true,
  templateUrl: "./sobre.component.html",
  styleUrls: ["./sobre.component.scss"]
})

export class SobreComponent {
  
  constructor() { 

  }

  redirect(url: string): void {
    console.log(url)
    window.open(url, '_blank');
  }
}
