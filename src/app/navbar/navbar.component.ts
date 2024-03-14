import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor() { }

  closeNavbar(): void {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
  
    if (navbarToggler && navbarCollapse) {
      const isTogglerCollapsed = navbarToggler.getAttribute('aria-expanded') === 'true';
      if (isTogglerCollapsed) {
        navbarToggler.click();
      }
    }
  }
}