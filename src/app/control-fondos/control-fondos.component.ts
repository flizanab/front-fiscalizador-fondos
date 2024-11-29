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
  archivos: Archivo[] = [];
  instituciones: Institucion[] = [];
  permisos: Permisos[] = [];
  permisoRoles: PermisoRol[] = [];
  proyectos: Proyecto[] = [];
  rendiciones: Rendicion[] = [];
  roles: Rol[] = [];
  usuarios: Usuario[] = [];
  rolxUsuarios: RolxUsuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerArchivos();
    this.obtenerInstituciones();
    this.obtenerPermisos();
    this.obtenerPermisoRoles();
    this.obtenerProyectos();
    this.obtenerRendiciones();
    this.obtenerRoles();
    this.obtenerUsuarios();
    this.obtenerRolxUsuarios();
  }

  obtenerArchivos(): void {
    this.usuarioService.obtenerArchivos().subscribe(data => this.archivos = data);
  }

  obtenerInstituciones(): void {
    this.usuarioService.obtenerInstitucion().subscribe(data => this.instituciones = data);
  }

  obtenerPermisos(): void {
    this.usuarioService.obtenerPermisos().subscribe(data => this.permisos = data);
  }

  obtenerPermisoRoles(): void {
    this.usuarioService.obtenerPermisoRol().subscribe(data => this.permisoRoles = data);
  }

  obtenerProyectos(): void {
    this.usuarioService.obtenerProyecto().subscribe(data => this.proyectos = data);
  }

  obtenerRendiciones(): void {
    this.usuarioService.obtenerRendicion().subscribe(data => this.rendiciones = data);
  }

  obtenerRoles(): void {
    this.usuarioService.obtenerRoles().subscribe(data => this.roles = data);
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe(data => this.usuarios = data);
  }

  obtenerRolxUsuarios(): void {
    this.usuarioService.obtenerRolxUsuario().subscribe(data => this.rolxUsuarios = data);
  }
}
