import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../servicios/api.service';
import { Usuario } from '../models/usuarios.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const institucionId = Number(params.get('institucionId'));
      this.obtenerUsuariosPorInstitucion(institucionId);
    });
  }

  obtenerUsuariosPorInstitucion(institucionId: number): void {
    this.usuarioService.obtenerUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios.filter(usuario => usuario.institucionId === institucionId);
    });
  }
}
