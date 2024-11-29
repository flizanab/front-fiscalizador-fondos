import { Component, OnInit } from '@angular/core';
import { Institucion } from '../models/institucion.model';
import { Rendicion } from '../models/rendicion.model';
import { UsuarioService } from '../servicios/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent
implements OnInit {
  instituciones: Institucion[] = [];
  rendiciones: Rendicion[] = [];
  eventos: { fecha: Date, monto: number, institucion: string | null }[] = [];
  viewDate: Date = new Date();

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerInstituciones();
    this.obtenerRendiciones();
  }

  obtenerInstituciones(): void {
    this.usuarioService.obtenerInstitucion().subscribe(data => {
      this.instituciones = data;
      this.actualizarEventos();
    });
  }

  obtenerRendiciones(): void {
    this.usuarioService.obtenerRendicion().subscribe(data => {
      this.rendiciones = data;
      this.actualizarEventos();
    });
  }

  actualizarEventos(): void {
    if (this.instituciones.length && this.rendiciones.length) {
      this.eventos = this.rendiciones.map(rendicion => {
        const institucion = this.instituciones.find(inst => inst.id === rendicion.proyectoId);
        return {
          fecha: new Date(rendicion.fechaRendicion),
          monto: rendicion.montoTotal,
          institucion: institucion ? institucion.nombre : null
        };
      });
    }
  }

  getDiasDelMes(mes: number, anio: number): Date[] {
    const fecha = new Date(anio, mes, 1);
    const dias: Date[] = [];
    while (fecha.getMonth() === mes) {
      dias.push(new Date(fecha));
      fecha.setDate(fecha.getDate() + 1);
    }
    return dias;
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }

  cambiarMes(direccion: number): void {
    this.viewDate.setMonth(this.viewDate.getMonth() + direccion);
    this.viewDate = new Date(this.viewDate); // Forzar actualización
  }

  cambiarAno(direccion: number): void {
    this.viewDate.setFullYear(this.viewDate.getFullYear() + direccion);
    this.viewDate = new Date(this.viewDate); // Forzar actualización
  }
}
