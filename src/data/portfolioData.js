import { Icons } from "../components/Icons";
import logoDos from "../assets/logoDos.png";

// ─────────────────────────────────────────────────────────────────
//  CÓMO AGREGAR TUS ARCHIVOS
// ─────────────────────────────────────────────────────────────────
//
//  IMÁGENES / VIDEOS LOCALES:
//    1. Copia el archivo a:  public/images/foto.jpg
//                            public/videos/video.mp4
//    2. Úsalo como src:      "/images/foto.jpg"
//                            "/videos/video.mp4"
//
//  GOOGLE DRIVE:
//    1. Abre el archivo → Compartir → "Cualquiera con el enlace"
//    2. Del enlace copia solo el ID:
//       https://drive.google.com/file/d/ ESTE_ES_EL_ID /view
//    - Para imágenes: src: "https://drive.google.com/thumbnail?id=ID&sz=w800"
//    - Para videos:   type: "drive",  src: "SOLO_EL_ID"
//
//  YOUTUBE:
//    type: "youtube",  src: "https://www.youtube.com/watch?v=XXXX"
//
// ─────────────────────────────────────────────────────────────────

export const kpis = [
  { label: "Instituciones impactadas", value: "8+", icon: Icons.School },
  { label: "Estudiantes estimados", value: "250-300", icon: Icons.Users },
  { label: "Actividades académicas", value: "18+", icon: Icons.Play },
  { label: "Productos y desarrollos", value: "2+", icon: Icons.Layers },
];



// ─── Eventos por categoría ─────────────────────────────────────────────
export const eventsByCategory = {

  "Póster": [
    {
      id: "poster-1",
      type: "Póster",
      title: "I Encuentro de Semilleros/ Sistema de información Granjas Cunícolas",
      date: "2022",
      description:
        "Presentación del primer póster en el I Encuentro de Semilleros - Sistema de información Granjas Cunícolas",

      image: "/images/Semillero2022.png", media: [
        { type: "image", src: "/images/IEncuentroSemilleros.jpeg", caption: "Póster CyberTech Women 2024" },
      ],
    },

    {
      id: "poster-2", type: "Póster", title: "CyberTech Women NEUROINFO", date: "2024",
      description: "Presentación de póster en el evento CyberTech Women 2024/NeuroInfo Explorando la mente: Neurociencia, educación y realidad aumentada.",
      image: "/images/posterCyber2024.png", media: [
        { type: "image", src: "/images/cyber2024.jpeg", caption: "Póster CyberTech Women 2024" },
      ],
    },
    {
      id: "poster-3", type: "Póster", title: "\"Del alto Chicamocha a la gamificación e inmersión para la comprensión de sistemas de energías renovables\" — Encuentro de Semilleros", date: "2025",
      description: "Participación con póster en el V Encuentro de Semilleros de Investigación de la Facultad de Ingeniería y Ciencias Básicas.",
      image: "/images/encuentrosemillerosPoster.png",
      media: [
        { type: "image", src: "/images/EvidenciaUno.jpeg", caption: "Póster CHICAMOCHA V 2025" },
        { type: "video", src: "/images/videoEvidencia.mp4", caption: "Video Evidencia" },
        { type: "image", src: "/images/EvidenciaSeis.jpeg", caption: "Póster CHICAMOCHA V 2025" },
        { type: "image", src: "/images/EvidenciaCincoAlto.jpeg", caption: "Póster CHICAMOCHA V 2025" },
        { type: "image", src: "/images/EvidenciaTresAlto.jpeg", caption: "Póster CHICAMOCHA V 2025" },
      ],
    },
    {
      id: "poster-4", type: "Póster", title: "CyberTech Women-RA y IA En la educación Veterinaria", date: "2026",
      description: "Presentación de póster en el evento CyberTech Women 2026/ Realidad Aumentada E Inteligencia Artificial En La Educación Veterinaria: Una Revisión Sistemática De Enfoques De Aprendizaje Interactivo ",
      image: "/images/cyber2026.png", media: [
        { type: "youtube", src: "https://youtu.be/756tzAlCJrM" },
      ],
    },
  ],

  "Capacitaciones": [
    {
      id: "cap-1", type: "Capacitación", title: "Taller RA — Colegio Libertador Simón Bolívar", date: "2023",
      description: "Capacitación en herramientas de realidad aumentada para estudiantes del Colegio Libertador Simón Bolívar.",
      image: "/images/libertadorcert.png", media: [
        { type: "image", src: "/images/libertador1.jpeg", caption: "Estudiantes Simón Bolívar" },
        { type: "image", src: "/images/libertador2.jpeg", caption: "Estudiantes Simón Bolívar" }],
    },
    {
      id: "cap-2", type: "Capacitación", title: "Taller RA — Comfaboy", date: "2023",
      description: "Capacitación de realidad aumentada dirigida a estudiantes de Comfaboy. Primera experiencia de transferencia tecnológica a instituciones externas.",
      image: "/images/CertificadoComfab.jpg", media: [
        { type: "image", src: "/images/evidenciaDosComfab.jpg", caption: "Taller Comfaboy" },
        { type: "image", src: "/images/evidenciaUnoComfaboy.jpeg", caption: "Taller Comfaboy" },
        { type: "image", src: "/images/evidenciaTresComfa.jpg", caption: "Video actividad" }
      ],
    },
    {
      id: "cap-3", type: "Capacitación", title: "Taller RA — Guillermo León Valencia", date: "2023",
      description: "Actividad práctica de realidad aumentada con estudiantes del colegio Guillermo León Valencia.",
      image: "/images/guillermoleon.png", media: [],
    },
    {
      id: "cap-4", type: "Capacitación", title: "Taller RA — Instituto Técnico Gonzalo Suárez Rendón", date: "2024",
      description: "Capacitación de realidad aumentada en el Instituto Técnico Gonzalo Suárez Rendón.",
      image: "/images/Gonzalo1.jpeg", media: [
        { type: "image", src: "/images/Gonzalo2.jpeg", caption: "Actividad ITGSR" },
        { type: "image", src: "/images/gonzalo3.jpeg", caption: "Actividad ITGSR" },
        { type: "image", src: "/images/gonzalo4.jpeg", caption: "Actividad ITGSR" }],
    },
    {
      id: "cap-5", type: "Capacitación", title: "Taller RA — Colegio Boyacá", date: "2024",
      description: "Capacitación de realidad aumentada con estudiantes del Colegio Boyacá.",
      image: "/images/boyaca1.jpeg", media: [
        { type: "image", src: "/images/boyaca3.png", caption: "Estudiantes Colegio Boyacá" },
        { type: "video", src: "/images/BoyacaVideo.mp4", caption: "Video Capacitación" },
        { type: "image", src: "/images/boyaca4.jpeg", caption: "Estudiantes Colegio Boyacá" },
        { type: "image", src: "/images/boyaca2.jpeg", caption: "Estudiantes Colegio Boyacá" }],
    },
    {
      id: "cap-6", type: "Capacitación", title: "Taller RA — Colegio Villa de Leyva", date: "2025",
      description: "Capacitación dirigida a estudiantes en Villa de Leyva, incorporando experiencias inmersivas con RA.",
      image: "/images/villa1.jpeg", media: [
        { type: "image", src: "/images/villa2.jpeg", caption: "Taller Villa de Leyva" },
        { type: "image", src: "/images/villa3.jpeg", caption: "Taller Villa de Leyva" },
        { type: "image", src: "/images/villa4.jpeg", caption: "Taller Villa de Leyva" },
        { type: "image", src: "/images/villa5.jpeg", caption: "Taller Villa de Leyva" }],
    },
    {
      id: "cap-7", type: "Capacitación", title: "Taller RA — Colegio Diego Torres Turmequé", date: "2025",
      description: "Capacitación con estudiantes del Colegio Diego Torres en Turmequé.",
      image: "/images/turmeque1.jpeg", media: [
        { type: "image", src: "/images/turmeque2.jpeg", caption: "Taller Turmequé" },
        { type: "image", src: "/images/turmeque3.jpeg", caption: "Taller Turmequé" },
        { type: "image", src: "/images/turmeque4.jpeg", caption: "Taller Turmequé" },
        { type: "image", src: "/images/turmeque5.jpeg", caption: "Taller Turmequé" },
        { type: "image", src: "/images/turmeque6.jpeg", caption: "Taller Turmequé" }],
    },
    {
      id: "cap-8", type: "Capacitación", title: "Taller RA + IA — Colegio Chiquinquirá", date: "2025",
      description: "Primera integración formal de inteligencia artificial en los talleres de realidad aumentada, en Chiquinquirá.",
      image: "/images/chiquin1.jpeg", media: [
        { type: "video", src: "/images/chiquin2.mp4", caption: "Video capacitación" },
        { type: "image", src: "/images/chiquin3.jpeg", caption: "Actividad con estudiantes" },
        { type: "image", src: "/images/chiquin4.jpeg", caption: "Actividad con estudiantes" },
      ],
    },
  ],

  "Ponencias": [
    {
      id: "pon-1", type: "Ponencia", title: "Tercer Simposio Tejiendo Humanidad", date: "2023",
      description: "Participación en el Tercer Simposio Tejiendo Humanidad con presentación de avances del semillero.",
      image: "/images/simposio.jpeg", media: [
        { type: "image", src: "/images/SimposioTejiendoHumanidades.png", caption: "Certificado" },
      ],
    },
    {
      id: "pon-2", type: "Ponencia", title: "ENIIU — Encuentro Nacional de Investigación", date: "2024",
      description: "Participación en el Encuentro Nacional de Investigación e Innovación Universitaria con póster y presentación oral.",
      highlights: ["ENIIU", "Investigación", "Póster académico"],
      image: "/images/eniiu.png", media: [{ type: "image", src: "/images/eniiu2.png", caption: "Póster ENIIU" }],
    },
    {
      id: "pon-3", type: "Ponencia", title: "CyberTech Women — UNAD", date: "2024",
      description: "Presentación de NeuroInfo en el evento CyberTech Women de la UNAD. Primer reconocimiento externo del proyecto.",
      image: "/images/cyber2024.jpeg", media: [
        { type: "youtube", src: "https://youtu.be/oMs7rtUqJsg?t=31831", caption: "Video CyberTech" },
      ],
    },
    {
      id: "pon-4", type: "Ponencia", title: "Metodologías activas — RA para actividad física y deporte", date: "2025",
      description: "Ponencia sobre el uso de la realidad aumentada en metodologías activas en educación física y deportes.",
      image: "/images/deporte1.jpeg", media: [
        { type: "image", src: "/images/deporte2.jpeg", caption: "Actividad con estudiantes" },
        { type: "video", src: "/images/deporte4.mp4", caption: "Video capacitación" },
        { type: "video", src: "/images/deporte3.mp4", caption: "Video capacitación" },
        { type: "image", src: "/images/deporte5.jpeg", caption: "Actividad con estudiantes" },
        { type: "image", src: "/images/deporte6.jpeg", caption: "Actividad con estudiantes" },
      ],
    },
  ],

  "Investigaciones": [
    {
      id: "inv-1", type: "Investigación", title: "NeuroInfo", date: "2024",
      description: "Propuesta de aplicación móvil que une neurociencia, realidad aumentada y aprendizaje interactivo. Presentada en múltiples eventos académicos.",
      image: "/images/Neuroinfo.png", media: [

      ],
    },
    {
      id: "inv-2", type: "Investigación", title: "Revisión sistemática — RA e IA en educación veterinaria", date: "2026",
      description: "Artículo de revisión sistemática sobre el potencial de la RA e IA para el aprendizaje interactivo en educación veterinaria.",
      image: "/images/ravet.png", media: [],
    },
  ],

  "Codirección": [
    {
      id: "codir-1", type: "Codirección", title: "Co-directora de trabajos de grado — San Jerónimo Emiliani", date: "2024",
      description: "Co-directora de trabajos de grado en modalidades técnicas de la institución San Jerónimo Emiliani.",
      image: "/images/emiliani1.png", media: [
        { type: "image", src: "/images/emiliani2.jpeg", caption: "Actividad con estudiantes" },
        { type: "image", src: "/images/emiliani3.png", caption: "Actividad con estudiantes" },
      ],
    },
  ],



  "Participaciones": [
    {
      id: "part-1",
      type: "Participación",
      title: "Monitora Semillero TECSI",
      date: "Semestre 2023-2 al Semestre 2024-2",
      description:
        "Participación como monitora del semillero TECSI durante tres semestres, apoyando la organización, representación y desarrollo de actividades, capacitaciones y proyectos del semillero.",
      image: "/images/turmeque3.jpeg",
      media: [],
    },
    {
      id: "part-2", type: "Participación", title: "Aplicación RA — Inauguración Doctorado en TI", date: "2025",
      description: "Demostración de aplicación de realidad aumentada en la inauguración del Doctorado en Tecnologías de la Información.",
      image: "/images/doctora3.png", media: [
        { type: "video", src: "/images/doctora1.mov", caption: "Demostración RA doctorado" },
        { type: "image", src: "/images/doctora2.png", caption: "Demostración RA doctorado" },
      ],
    },
  ],

  "Productos": [
    {
      id: "prod-1", type: "Producto", title: "Plataforma Gestión de Egresados", date: "2024",
      description: "Desarrollo de plataforma web para la gestión y seguimiento de egresados de la institución.",
      image: "images/egresados1.jpeg", media: [
        { type: "video", src: "images/egresados.mp4", caption: "Video Plataforma" },
        { type: "image", src:"images/egresados2.jpeg", caption: "Evidencias" },
        { type: "image", src:"images/egresados3.jpeg", caption: "evidencias" },
        { type: "image", src:"images/egresados4.jpeg", caption: "evidencias" },
      ],
    },
    {
      id: "prod-2", type: "Producto", title: "Alto Chicamocha RA — Gamificación e Inmersión", date: "2025",
      description: "Aplicación móvil funcional para comprender sistemas de energías renovables mediante realidad aumentada y gamificación.",
      image: "/images/EvidenciaUno.jpeg", media: [
        { type: "video", src: "/images/chicamocha1.mp4", caption: "Demo Alto Chicamocha" },
       { type: "video", src: "/images/graficasChica.mp4", caption: "Demo Alto Chicamocha" },
      ],
    },

  ],
};

export const mapPoints = [
  { name: "Tunja", note: "Universidad, Comfaboy, UPTC y eventos", x: "50%", y: "42%" },
  { name: "Villa de Leyva", note: "Capacitación grado 10", x: "66%", y: "28%" },
  { name: "Turmequé", note: "VI Feria Universitaria", x: "38%", y: "52%" },
  { name: "Chiquinquirá", note: "Capacitación RA + IA", x: "25%", y: "38%" },
  { name: "Colegio Boyacá", note: "Capacitación grado 11", x: "62%", y: "60%" },
  { name: "San Jerónimo", note: "Codirección trabajos de grado", x: "74%", y: "48%" },
];

export const activityCounts = [
  { label: "Capacitaciones", value: 8 },
  { label: "Ponencias", value: 5 },
  { label: "Pósteres", value: 4 },
  { label: "Desarrollos", value: 3 },
  { label: "Investigaciones", value: 2 },
];

export const workItems = [
  {
    category: "Capacitación",
    title: "Realidad Aumentada e IA en colegios",
    place: "Chiquinquirá, Turmequé, Villa de Leyva, Colegio Boyacá, Comfaboy y otros",
    result: "Acercamiento de estudiantes a herramientas emergentes mediante experiencias prácticas.",
    media: [
      { type: "video", src: null, caption: "Video capacitación Chiquinquirá" },
      { type: "image", src: null, caption: "Taller Comfaboy" },
      { type: "image", src: null, caption: "Taller Villa de Leyva" },
      { type: "video", src: null, caption: "Video Turmequé" },
    ],
  },
  {
    category: "Investigación",
    title: "RA e IA en educación veterinaria",
    place: "Artículo de revisión sistemática",
    result: "Análisis del potencial de RA e IA para aprendizaje interactivo en medicina veterinaria.",
    media: [
      { type: "image", src: null, caption: "Portada artículo" },
      { type: "image", src: null, caption: "Póster presentado" },
      { type: "video", src: null, caption: "Sustentación" },
      { type: "image", src: null, caption: "Equipo de investigación" },
    ],
  },
  {
    category: "Producto",
    title: "NeuroInfo",
    place: "CyberTech Women UNAD / ENIIU",
    result: "Propuesta de aplicación móvil que une neurociencia, realidad aumentada y aprendizaje interactivo.",
    media: [
      { type: "youtube", src: null, caption: "Demo NeuroInfo" },
      { type: "image", src: null, caption: "Pantallas de la app" },
      { type: "image", src: null, caption: "Póster ENIIU" },
      { type: "image", src: null, caption: "Presentación CyberTech" },
    ],
  },
  {
    category: "Producto",
    title: "Alto Chicamocha RA",
    place: "Energías renovables + gamificación",
    result: "Aplicaciones móviles funcionales para comprender sistemas energéticos con recursos inmersivos.",
    media: [
      { type: "video", src: "/videos/videoJuego.mp4", caption: "Demo Alto Chicamocha" },
      { type: "video", src: "/videos/videoJuego.mp4", caption: "Interfaz gamificación" },
      { type: "image", src: null, caption: "Estudiantes usando la app" },
      { type: "image", src: null, caption: "Póster presentado" },
    ],
  },
];