import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly AUTH_KEY = 'isLoggedIn';

  constructor() {}

  // Método para realizar login
  login(email: string, password: string): boolean {
    if (email === 'mail@mail.com' && password === '123456') {
      localStorage.setItem(this.AUTH_KEY, 'true');
      return true;
    }
    return false;
  }

  // Método para realizar logout
  logout(): void {
    localStorage.removeItem(this.AUTH_KEY); // Elimina el estado de autenticación
  }

  // Verifica si el usuario está autenticado
  get isLoggedIn(): boolean {
    return localStorage.getItem(this.AUTH_KEY) === 'true';
  }
}
