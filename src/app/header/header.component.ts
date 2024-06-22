import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mobileMenu: boolean = false;
  burgerMenu: string = './assets/img/burger-menu.svg';

  openMobileMenu() {
    this.burgerMenu = './assets/img/close.svg';
    if(!this.mobileMenu) {
      this.mobileMenu = true;
    } else {
      this.mobileMenu = false;
      this.burgerMenu = './assets/img/burger-menu.svg';
    }
  }

  closeMobileMenu() {
    this.mobileMenu = false;
  }
}
