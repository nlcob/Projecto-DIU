// opciones para los filtros y lista de eventos de prueba

export const CAMPUS_OPTIONS = [
  'Todos',
  'Campus San Joaquín',
  'Casa Central Valparaíso',
  'Campus Vitacura',
  'Sede Viña del Mar',
  'Sede Concepción',
  'Online'
]

export const AREA_OPTIONS = [
  'Todas',
  'Informática',
  'Matemática y Ciencias',
  'Ingeniería e Innovación',
  'Empleabilidad',
  'Cultura y Vida USM'
]

export const EVENTOS_USM = [
  {
    id: 1,
    titulo: 'XXXIV Feria de Software USM 2026',
    resumen: 'Exposición anual de proyectos de software desarrollados por estudiantes de Ingeniería Civil Informática.',
    descripcion: 'Muestra abierta de prototipos funcionales creados por estudiantes de último año en áreas de inteligencia artificial, salud y sustentabilidad. Podrás probar las aplicaciones y conversar con los equipos.',
    area: 'Informática',
    organizador: 'Departamento de Informática USM',
    campus: 'Campus San Joaquín',
    lugar: 'Patio Central y Hall Edificio K',
    modalidad: 'Presencial',
    fecha: '06 de Noviembre, 2026',
    hora: '10:00 - 17:00',
    requiereInscripcion: false,
    cupos: null
  },
  {
    id: 2,
    titulo: 'Charla: Aplicaciones de Inteligencia Artificial en Desarrollo Web',
    resumen: 'Introducción práctica a la integración de modelos de lenguaje en aplicaciones web y diseño de interfaces.',
    descripcion: 'Charla organizada junto al Centro de Alumnos de Informática donde se revisarán casos reales de uso de IA, buenas prácticas de usabilidad y ronda de preguntas al final.',
    area: 'Informática',
    organizador: 'Centro de Alumnos de Informática',
    campus: 'Campus San Joaquín',
    lugar: 'Auditorio B-201',
    modalidad: 'Presencial',
    fecha: '04 de Noviembre, 2026',
    hora: '12:15 - 13:30',
    requiereInscripcion: true,
    cupos: 40
  },
  {
    id: 3,
    titulo: 'Seminario de Matemática Aplicada: Optimización en Redes Eléctricas',
    resumen: 'Presentación de modelos matemáticos y simulaciones numéricas para energías renovables.',
    descripcion: 'El Departamento de Matemática invita a estudiantes interesados en modelamiento, análisis numérico e investigación a conocer proyectos actuales y temas de memoria.',
    area: 'Matemática y Ciencias',
    organizador: 'Departamento de Matemática (DMAT)',
    campus: 'Casa Central Valparaíso',
    lugar: 'Sala M-302, Edificio M',
    modalidad: 'Presencial',
    fecha: '05 de Noviembre, 2026',
    hora: '14:30 - 16:00',
    requiereInscripcion: true,
    cupos: 30
  },
  {
    id: 4,
    titulo: 'Feria de Prácticas y Empleabilidad Sansana 2026',
    resumen: 'Encuentro con empresas de ingeniería y tecnología que buscan practicantes de verano y memoristas.',
    descripcion: 'Jornada con stands de empresas, revisión de currículum y charlas cortas sobre cómo preparar entrevistas para prácticas industriales y profesionales.',
    area: 'Empleabilidad',
    organizador: 'Red de Exalumnos y Empleabilidad USM',
    campus: 'Casa Central Valparaíso',
    lugar: 'Gimnasio Principal',
    modalidad: 'Presencial',
    fecha: '10 de Noviembre, 2026',
    hora: '09:30 - 16:30',
    requiereInscripcion: true,
    cupos: 150
  },
  {
    id: 5,
    titulo: 'Taller de Prototipado e Impresión 3D en FabLab',
    resumen: 'Taller introductorio para diseñar y fabricar un primer prototipo físico en una tarde.',
    descripcion: 'Actividad práctica abierta a estudiantes de todas las carreras para conocer las herramientas del laboratorio FabLab y diseño de productos.',
    area: 'Ingeniería e Innovación',
    organizador: 'Ingeniería en Diseño de Productos',
    campus: 'Campus San Joaquín',
    lugar: 'Laboratorio FabLab, Edificio F',
    modalidad: 'Presencial',
    fecha: '11 de Noviembre, 2026',
    hora: '15:30 - 18:00',
    requiereInscripcion: true,
    cupos: 20
  },
  {
    id: 6,
    titulo: 'Charla Informativa: Becas e Intercambio Estudiantil 2027',
    resumen: 'Requisitos, fechas de postulación y convenios internacionales disponibles para pregrado.',
    descripcion: 'La Dirección de Asuntos Internacionales explicará cómo postular a un semestre de intercambio, opciones de becas y convalidación de ramos.',
    area: 'Empleabilidad',
    organizador: 'Dirección de Asuntos Internacionales USM',
    campus: 'Online',
    lugar: 'Transmisión por Zoom USM',
    modalidad: 'Online',
    fecha: '12 de Noviembre, 2026',
    hora: '12:15 - 13:30',
    requiereInscripcion: true,
    cupos: 200
  },
  {
    id: 7,
    titulo: 'Concierto Sinfónico de Bandas Sonoras en Aula Magna',
    resumen: 'Función gratuita para estudiantes USM con música de cine y videojuegos.',
    descripcion: 'Concierto de la Temporada Artística USM abierto gratis para estudiantes presentando su TNE o credencial universitaria en la entrada.',
    area: 'Cultura y Vida USM',
    organizador: 'Dirección de Difusión Cultural USM',
    campus: 'Casa Central Valparaíso',
    lugar: 'Teatro Aula Magna',
    modalidad: 'Presencial',
    fecha: '14 de Noviembre, 2026',
    hora: '19:00 - 20:30',
    requiereInscripcion: false,
    cupos: null
  },
  {
    id: 8,
    titulo: 'Jornada de Electromovilidad y Energías Limpias',
    resumen: 'Muestra de vehículos eléctricos estudiantiles y charla técnica abierta en patio central.',
    descripcion: 'Demostración de prototipos hechos por estudiantes de la sede y convocatoria para sumarse a los equipos de competición 2027.',
    area: 'Ingeniería e Innovación',
    organizador: 'Sede Viña del Mar USM',
    campus: 'Sede Viña del Mar',
    lugar: 'Salón de Actos y Patio Central',
    modalidad: 'Presencial',
    fecha: '20 de Noviembre, 2026',
    hora: '10:00 - 13:30',
    requiereInscripcion: false,
    cupos: null
  }
]
