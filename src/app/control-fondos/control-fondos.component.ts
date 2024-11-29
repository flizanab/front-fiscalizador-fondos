import { Component, OnInit } from '@angular/core';
import { Archivo } from '../models/Archivos.model';
import { Institucion } from '../models/institucion.model';
import { Permisos } from '../models/permisos.model';
import { PermisoRol } from '../models/permisoRol.model';
import { Proyecto } from '../models/proyecto.model';
import { Rendicion } from '../models/rendicion.model';
import { Rol } from '../models/rol.model';
import { RolxUsuario } from '../models/rolxUsuario.model';
import { Usuario } from '../models/usuarios.model';
import { UsuarioService } from '../servicios/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-fondos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-fondos.component.html',
  styleUrls: ['./control-fondos.component.css']
})
export class ControlFondosComponent implements OnInit {
  instituciones: Institucion[] = [];
  proyectos: Proyecto[] = [];
  rendiciones: Rendicion[] = [];
  proyectosFiltrados: { [key: number]: Proyecto[] } = {};
  rendicionesFiltradas: { [key: number]: Rendicion[] } = {};

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerInstituciones();
    this.obtenerProyectos();
    this.obtenerRendiciones();
  }

  obtenerInstituciones(): void {
    this.usuarioService.obtenerInstitucion().subscribe(data => {
      this.instituciones = data;
      this.filtrarProyectos();
    });
  }

  obtenerProyectos(): void {
    this.usuarioService.obtenerProyecto().subscribe(data => {
      this.proyectos = data;
      this.filtrarProyectos();
    });
  }

  obtenerRendiciones(): void {
    this.usuarioService.obtenerRendicion().subscribe(data => {
      this.rendiciones = data;
      this.filtrarRendiciones();
    });
  }

  filtrarProyectos(): void {
    if (this.instituciones.length && this.proyectos.length) {
      this.instituciones.forEach(institucion => {
        this.proyectosFiltrados[institucion.id] = this.proyectos.filter(proyecto => proyecto.institucionId === institucion.id);
      });
    }
  }

  filtrarRendiciones(): void {
    if (this.proyectos.length && this.rendiciones.length) {
      this.proyectos.forEach(proyecto => {
        this.rendicionesFiltradas[proyecto.id] = this.rendiciones.filter(rendicion => rendicion.proyectoId === proyecto.id);
      });
    }
  }

  obtenerRendicionesPorProyecto(proyectoId: number): number {
    return this.rendicionesFiltradas[proyectoId]?.reduce((total, rendicion) => total + rendicion.montoTotal, 0) || 0;
  }
}
