export interface Proyecto {
  id: number;
  institucionId: number;
  nombre: string | null;
  descripcion: string | null;
  fechaInicio: string;
  fechaFin: string;
  presupuesto: number;
  estado: string | null;
  fechaCreacion: string;
}
