import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private authService: AuthService, private router: Router) {}

  // Método de logout
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);  // Redirige al login después de hacer logout
  }

  // Método para verificar si el usuario está logueado
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
}
