import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/api.service';
import { Institucion } from '../models/institucion.model';
import { Proyecto } from '../models/proyecto.model';
import { Rendicion } from '../models/rendicion.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  instituciones: Institucion[] = [];
  proyectos: Proyecto[] = [];
  rendiciones: Rendicion[] = [];
  totalPresupuesto: number = 0;
  totalRendiciones: number = 0;
  totalInstituciones: number = 0;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerInstituciones();
    this.obtenerProyectos();
    this.obtenerRendiciones();
  }

  obtenerInstituciones(): void {
    this.usuarioService.obtenerInstitucion().subscribe(data => {
      this.instituciones = data;
      this.totalInstituciones = data.length;
      this.calcularTotales();
    });
  }

  obtenerProyectos(): void {
    this.usuarioService.obtenerProyecto().subscribe(data => {
      this.proyectos = data;
      this.calcularTotales();
    });
  }

  obtenerRendiciones(): void {
    this.usuarioService.obtenerRendicion().subscribe(data => {
      this.rendiciones = data;
      this.calcularTotales();
    });
  }

  calcularTotales(): void {
    if (this.instituciones.length && this.proyectos.length && this.rendiciones.length) {
      this.totalPresupuesto = this.proyectos.reduce((total, proyecto) => total + proyecto.presupuesto, 0);
      this.totalRendiciones = this.rendiciones.reduce((total, rendicion) => total + rendicion.montoTotal, 0);
    }
  }

  calcularPorcentajeRendiciones(): number {
    return (this.totalRendiciones / this.totalPresupuesto) * 100;
  }

  calcularMontoRendicionesInstitucion(institucionId: number): number {
    const proyectosInstitucion = this.proyectos.filter(proyecto => proyecto.institucionId === institucionId);
    return proyectosInstitucion.reduce((total, proyecto) => {
      const rendicionesProyecto = this.rendiciones.filter(rendicion => rendicion.proyectoId === proyecto.id);
      return total + rendicionesProyecto.reduce((suma, rendicion) => suma + rendicion.montoTotal, 0);
    }, 0);
  }

  calcularMontoPresupuestoInstitucion(institucionId: number): number {
    const proyectosInstitucion = this.proyectos.filter(proyecto => proyecto.institucionId === institucionId);
    return proyectosInstitucion.reduce((total, proyecto) => total + proyecto.presupuesto, 0);
  }

  calcularPorcentajeRendicionesInstitucion(institucionId: number): number {
    const montoRendiciones = this.calcularMontoRendicionesInstitucion(institucionId);
    const montoPresupuesto = this.calcularMontoPresupuestoInstitucion(institucionId);
    return (montoRendiciones / montoPresupuesto) * 100;
  }
}
