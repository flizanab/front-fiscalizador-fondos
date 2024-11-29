export interface Usuario {
  id: number;
  institucionId: number;
  nombre: string | null;
  email: string | null;
  passwordHash: string | null;
  activo: boolean;
  fechaCreacion: string;
}
