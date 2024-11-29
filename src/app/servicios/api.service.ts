import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuarios.model'
import { Rendicion } from '../models/rendicion.model';
import { Proyecto } from '../models/proyecto.model';
import { PermisoRol } from '../models/permisoRol.model';
import { Permisos } from '../models/permisos.model';
import { Institucion } from '../models/institucion.model';
import { Archivo } from '../models/Archivos.model';
import { Rol } from '../models/rol.model';
import { RolxUsuario } from '../models/rolxUsuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  ObtenerUsuarios() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'https://localhost:44359/api/';

  constructor(private http: HttpClient) {}

  obtenerArchivos(): Observable<Archivo[]> {
    return this.http.get<Archivo[]>(`${this.apiUrl}Archivos/ObtenerArchivos`);
  }

  obtenerInstitucion(): Observable<Institucion[]> {
    return this.http.get<Institucion[]>(`${this.apiUrl}Institucion/ObtenerInstituciones`);
  }

  obtenerPermisos(): Observable<Permisos[]> {
    return this.http.get<Permisos[]>(`${this.apiUrl}Institucion/ObtenerInstituciones`);
  }
  obtenerPermisoRol(): Observable<PermisoRol[]> {
    return this.http.get<PermisoRol[]>(`${this.apiUrl}PermisoRol/ObtenerPermisoxRol`);
  }

  obtenerProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiUrl}Proyecto/ObtenerProyectos`);
  }

  obtenerRendicion(): Observable<Rendicion[]> {
    return this.http.get<Rendicion[]>(`${this.apiUrl}Rendicion/ObtenerRendicion`);
  }

  obtenerRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${this.apiUrl}Rol/ObtenerRoles`)
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}Usuario/ObtenerUsuarios`);
  }

  obtenerRolxUsuario(): Observable<RolxUsuario[]>{
    return this.http.get<RolxUsuario[]>(`${this.apiUrl}UsuarioRol/ObtenerRolexUsuario`)
  }
}
