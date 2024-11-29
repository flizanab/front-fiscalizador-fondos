export interface Rendicion {
  id: number;
  proyectoId: number;
  fechaRendicion: string;
  montoTotal: number;
  estado: string | null;
  obserciones: string | null;
  fechaCreacion: string
}
