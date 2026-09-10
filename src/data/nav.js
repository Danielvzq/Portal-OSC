export const NAV = [
  { label: 'Inicio', path: '/' },
  { label: 'Registro', path: '/registro' },
  {
    label: 'Programa de Fomento',
    path: '/programa-de-fomento',
    children: [
      { label: 'Convocatorias y Resultados', path: '/programa-de-fomento/convocatorias-y-resultados' },
      { label: 'Trámites', path: '/programa-de-fomento/tramites' },
      { label: 'Eventos Externos', path: '/programa-de-fomento/eventos-externos' },
    ],
  },
  {
    label: 'Órganos de representación',
    path: '/organos-de-representacion',
    children: [
      { label: 'Comité', path: '/organos-de-representacion/comite' },
      { label: 'Consejo', path: '/organos-de-representacion/consejo' },
    ],
  },
  {
    label: 'Multimedia',
    path: '/multimedia',
    children: [
      { label: 'Material de Apoyo', path: '/multimedia/material-de-apoyo' },
      { label: "Videos OSC's", path: '/multimedia/videos-oscs' },
    ],
  },
  { label: 'Contáctanos', path: '/contacto' },
]
