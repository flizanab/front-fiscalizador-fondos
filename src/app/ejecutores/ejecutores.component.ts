import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Institucion } from '../models/institucion.model';
import { UsuarioService } from '../servicios/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejecutores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejecutores.component.html',
  styleUrl: './ejecutores.component.css'
})
export class EjecutoresComponent implements OnInit {

  Institucion: Institucion[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioService.obtenerInstitucion().subscribe((data) => {
      this.Institucion = data;
    });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/institucion', id]);
  }
}
