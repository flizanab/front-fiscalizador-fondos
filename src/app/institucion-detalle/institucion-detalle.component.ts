import { Component, OnInit } from '@angular/core';
import { Institucion } from '../models/institucion.model';
import { Proyecto } from '../models/proyecto.model';
import { Rendicion } from '../models/rendicion.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsuarioService } from '../servicios/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-institucion-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './institucion-detalle.component.html',
  styleUrl: './institucion-detalle.component.css'
})
export class InstitucionDetalleComponent implements OnInit {
  institucion: Institucion | null = null;
  proyectos: Proyecto[] = [];
  rendicionesFiltradas: { [key: number]: Rendicion[] } = {};

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const institucionId = Number(params.get('id'));
      this.obtenerInstitucion(institucionId);
      this.obtenerProyectos(institucionId);
    });
  }

  obtenerInstitucion(id: number): void {
    this.usuarioService.obtenerInstitucion().subscribe(instituciones => {
      this.institucion = instituciones.find(institucion => institucion.id === id) || null;
    });
  }

  obtenerProyectos(institucionId: number): void {
    this.usuarioService.obtenerProyecto().subscribe(proyectos => {
      this.proyectos = proyectos.filter(proyecto => proyecto.institucionId === institucionId);
      this.proyectos.forEach(proyecto => this.obtenerRendiciones(proyecto.id));
    });
  }

  obtenerRendiciones(proyectoId: number): void {
    this.usuarioService.obtenerRendicion().subscribe(rendiciones => {
      this.rendicionesFiltradas[proyectoId] = rendiciones.filter(rendicion => rendicion.proyectoId === proyectoId);
    });
  }
}
