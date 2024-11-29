export interface Archivo {
  id: number;
  rendicionId: number,
  nombreArchivo: string | null;
  tipoArchivo: string | null;
  urlArchivo: string | null;
  tamano: number;
  fechaCarga: string ;
  base64: string | null;
}
