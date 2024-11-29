import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../servicios/api.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService ) {}

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }
}
