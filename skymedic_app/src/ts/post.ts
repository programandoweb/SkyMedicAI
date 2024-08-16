export interface Colombia {
  codigo_departamento: string;
  departamento: string;
  provincia: string;
  c_digo_municipio: string;
  municipio: string;
  codigo_dane_institucion: string;
  nombre_institucion_educativa: string;
  codigo_dane_sede: string;
  nombre_sede_educativa: string;
  zona: string;
  proyectos_de_conectividad: string;
  operador: string;
  estado: string;
  medio_de_enlace: string;
  ancho_de_banda_de_subida: string;
  ancho_de_banda_descarga_mb: string;
  finalizaci_n_del_contrato: string;
  latitud: string;
  longitud: string;
}

export interface ComponentCSRProps {
    dataSet: Colombia[];
}