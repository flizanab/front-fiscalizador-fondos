import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  mensaje: string | null = null;
  password: string | null = null;
  email: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.email && this.password && this.authService.login(this.email, this.password)) {
      this.router.navigate(['/']); // Redirige al usuario después de iniciar sesión
    } else {
      this.mensaje = 'Credenciales incorrectas';
    }
  }
}
