import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";


@Component({
  selector: "app-navbar",
  standalone:true,
  imports: [CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})

export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
