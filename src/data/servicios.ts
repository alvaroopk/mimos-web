export interface Servicio {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
  heroDescription: string;
  description: string[];
  includes: string[];
  whenNeeded: string[];
  whyMimos: string;
}

export const servicios: Servicio[] = [
  {
    slug: "medicina-preventiva",
    name: "Medicina Preventiva",
    shortDescription:
      "La mejor forma de cuidar a tu mascota es anticiparte. Planes de vacunación, desparasitación y revisiones adaptadas a cada etapa vital.",
    icon: "ShieldCheck",
    heroDescription:
      "Planes de vacunación y desparasitación adaptados a cada etapa vital de tu mascota.",
    description: [
      "La medicina preventiva es la base de una vida larga y saludable para tu mascota. En MIMOS diseñamos planes de vacunación, desparasitación y revisiones periódicas adaptados a la edad, raza y estilo de vida de cada animal.",
      "Nuestro enfoque preventivo incluye revisiones completas donde evaluamos el estado general de salud, detectamos posibles problemas de forma temprana y te asesoramos sobre nutrición, ejercicio y cuidados específicos.",
    ],
    includes: [
      "Planes de vacunación personalizados",
      "Desparasitación interna y externa",
      "Revisiones anuales completas",
      "Identificación con microchip",
      "Asesoramiento en cada etapa vital",
      "Cartilla sanitaria y seguimiento",
    ],
    whenNeeded: [
      "Tienes un cachorro o gatito nuevo en casa",
      "Tu mascota necesita su revisión anual",
      "Quieres mantener al día las vacunas",
      "Buscas un plan de prevención a medida",
    ],
    whyMimos:
      "En MIMOS no aplicamos protocolos genéricos. Diseñamos un plan de prevención específico para tu mascota según su edad, raza, entorno y estilo de vida. Porque no es lo mismo un gato de interior que un perro que va al campo cada día.",
  },
  {
    slug: "medicina-interna",
    name: "Medicina Interna",
    shortDescription:
      "Diagnóstico completo y tratamiento de enfermedades con veterinarios en formación continua.",
    icon: "Stethoscope",
    heroDescription:
      "Diagnóstico completo y tratamiento de enfermedades internas con veterinarios en formación continua.",
    description: [
      "La medicina interna abarca el diagnóstico y tratamiento de enfermedades que afectan a los órganos internos de tu mascota: sistema digestivo, respiratorio, endocrino, urinario y más.",
      "Nuestro equipo veterinario está en formación continua para aplicar los protocolos diagnósticos más actualizados y ofrecer las mejores opciones terapéuticas disponibles.",
    ],
    includes: [
      "Consultas de medicina general",
      "Diagnóstico de enfermedades crónicas",
      "Tratamientos especializados",
      "Seguimiento de patologías",
      "Segundas opiniones médicas",
    ],
    whenNeeded: [
      "Tu mascota muestra síntomas como vómitos, diarrea o pérdida de peso",
      "Ha sido diagnosticada con una enfermedad crónica",
      "Necesitas una segunda opinión médica",
      "Buscas un seguimiento completo de su salud",
    ],
    whyMimos:
      "Contamos con laboratorio propio y diagnóstico por imagen en el mismo centro, lo que nos permite obtener resultados rápidos sin derivarte a otros centros y sin el estrés del desplazamiento para tu mascota.",
  },
  {
    slug: "consultas-especialidad",
    name: "Consultas de Especialidad",
    shortDescription:
      "La mayoría de especialidades disponibles en nuestras instalaciones. Sin desplazarte a un hospital veterinario.",
    icon: "ClipboardList",
    heroDescription:
      "Accede a la mayoría de especialidades veterinarias sin salir de tu clínica de confianza.",
    description: [
      "En MIMOS ofrecemos consultas de especialidad que normalmente solo están disponibles en grandes hospitales veterinarios. Traumatología, dermatología, cardiología y más — sin que tengas que desplazarte lejos de tu zona.",
      "Nuestro equipo cuenta con formación especializada y, cuando un caso requiere un nivel de subespecialización mayor, trabajamos con una red de especialistas de referencia con los que colaboramos estrechamente.",
    ],
    includes: [
      "Traumatología y ortopedia",
      "Dermatología veterinaria",
      "Cardiología",
      "Oftalmología básica",
      "Neurología de primer nivel",
      "Derivación a especialistas cuando es necesario",
    ],
    whenNeeded: [
      "Tu mascota tiene un problema que requiere un especialista",
      "Has sido derivado desde otra clínica",
      "Necesitas una valoración especializada antes de cirugía",
      "Tu mascota tiene problemas recurrentes sin diagnóstico claro",
    ],
    whyMimos:
      "No todas las clínicas de barrio ofrecen consultas de especialidad. En MIMOS sí, lo que significa que tu mascota puede ser atendida por profesionales especializados sin el estrés de ir a un hospital veterinario grande.",
  },
  {
    slug: "diagnostico-imagen",
    name: "Diagnóstico por Imagen",
    shortDescription:
      "Radiología digital de última generación, ecografía y ecocardiografía. Resultados rápidos en el propio centro.",
    icon: "ScanLine",
    heroDescription:
      "Radiología digital de última generación y ecografía en Murcia — resultados inmediatos.",
    description: [
      "En MIMOS contamos con uno de los equipos de radiología digital más modernos de toda la región. Esto nos permite obtener imágenes de gran calidad de forma inmediata, reduciendo el tiempo de diagnóstico y el estrés de tu mascota durante la exploración.",
      "Además de la radiología, realizamos ecografía general abdominal y ecocardiografía en el propio centro. Para los casos que requieren TAC o resonancia magnética, trabajamos con un centro especializado de referencia cercano al que derivamos cuando es necesario.",
    ],
    includes: [
      "Radiología digital de alta resolución",
      "Ecografía abdominal general",
      "Ecocardiografía (ecografía del corazón)",
      "Derivación a TAC/RMN con centro colaborador de confianza",
      "Informe radiológico y entrega de imágenes digitales",
    ],
    whenNeeded: [
      "Tu mascota ha sufrido un golpe o caída y puede tener una fractura",
      "Tu veterinario sospecha de un problema interno (hígado, riñón, bazo, vejiga...)",
      "Tu mascota tiene problemas respiratorios o cardíacos",
      "Seguimiento post-operatorio que requiere imagen",
    ],
    whyMimos:
      "No todas las clínicas de barrio ofrecen radiología digital de última generación. En MIMOS sí, lo que significa que no tendrás que desplazarte a un hospital veterinario para estas pruebas — con el estrés que eso supone para tu mascota.",
  },
  {
    slug: "laboratorio",
    name: "Laboratorio Propio",
    shortDescription:
      "Análisis de sangre, orina, citologías y más — sin esperas de laboratorios externos para las pruebas habituales.",
    icon: "Microscope",
    heroDescription:
      "Análisis de sangre, orina, citologías y serologías — sin esperar días por resultados externos.",
    description: [
      "Nuestro laboratorio propio nos permite realizar las pruebas diagnósticas más habituales en el mismo momento de la consulta, obteniendo resultados en minutos en lugar de días.",
      "Esto es especialmente importante en urgencias y en el seguimiento de enfermedades crónicas, donde cada hora de espera puede marcar la diferencia en el tratamiento.",
    ],
    includes: [
      "Hemogramas completos",
      "Bioquímicas sanguíneas",
      "Análisis de orina",
      "Citologías",
      "Serologías rápidas",
      "Pruebas de coagulación",
    ],
    whenNeeded: [
      "Tu mascota necesita un análisis de sangre previo a cirugía",
      "Tu veterinario necesita resultados rápidos para un diagnóstico urgente",
      "Tu mascota tiene una enfermedad crónica que requiere controles periódicos",
      "Necesitas un chequeo completo de salud",
    ],
    whyMimos:
      "Tener laboratorio propio significa resultados en minutos, no en días. En situaciones urgentes, esa velocidad puede salvar la vida de tu mascota. Y para ti, menos visitas y menos estrés.",
  },
  {
    slug: "cirugia",
    name: "Cirugía",
    shortDescription:
      "Quirófano totalmente equipado. Cirugía general, traumatología, odontología y endoscopia mínimamente invasiva.",
    icon: "Scissors",
    heroDescription:
      "Quirófano totalmente equipado para cirugía general, traumatología, odontología y endoscopia.",
    description: [
      "Nuestro quirófano está equipado con la tecnología necesaria para realizar intervenciones de cirugía general, traumatología, odontología veterinaria y endoscopia mínimamente invasiva.",
      "Antes de cualquier intervención, realizamos una evaluación preoperatoria completa con analítica y valoración anestésica. Durante la cirugía, tu mascota está monitorizada en todo momento. Tras la operación, proporcionamos hospitalización y seguimiento post-quirúrgico completo.",
    ],
    includes: [
      "Cirugía general (esterilizaciones, extirpaciones...)",
      "Traumatología y ortopedia",
      "Odontología veterinaria",
      "Endoscopia mínimamente invasiva",
      "Evaluación prequirúrgica completa",
      "Hospitalización y seguimiento postoperatorio",
    ],
    whenNeeded: [
      "Tu mascota necesita una esterilización",
      "Ha sido diagnosticada con un problema que requiere cirugía",
      "Tiene un problema dental que necesita intervención",
      "Necesita una cirugía traumatológica tras un accidente",
    ],
    whyMimos:
      "Contamos con equipamiento quirúrgico de primer nivel, incluyendo endoscopia para cirugías mínimamente invasivas. Tu mascota se opera y se recupera en el mismo centro donde la conocen y la tratan con cariño.",
  },
  {
    slug: "hospitalizacion",
    name: "Hospitalización",
    shortDescription:
      "Zonas separadas para perros y gatos, área de aislamiento y protocolos de higiene reforzados para una recuperación segura.",
    icon: "BedDouble",
    heroDescription:
      "Zonas separadas para perros y gatos, con protocolos de higiene reforzados.",
    description: [
      "Nuestra área de hospitalización está diseñada para garantizar la recuperación más segura y menos estresante posible. Con zonas separadas para perros y gatos, y un área de aislamiento para casos infecciosos.",
      "Cada paciente hospitalizado recibe atención continuada, monitorización de constantes y el cariño de un equipo que sabe que estar lejos de casa es difícil tanto para la mascota como para su familia.",
    ],
    includes: [
      "Zonas de hospitalización separadas por especie",
      "Área de aislamiento para enfermedades infecciosas",
      "Monitorización continua de constantes",
      "Administración de medicación y fluidos",
      "Comunicación diaria con los propietarios",
      "Protocolos de higiene reforzados",
    ],
    whenNeeded: [
      "Tu mascota necesita observación tras una cirugía",
      "Requiere medicación intravenosa o tratamiento continuado",
      "Ha sido diagnosticada con una enfermedad infecciosa que requiere aislamiento",
      "Necesita estabilización tras una urgencia",
    ],
    whyMimos:
      "La separación de zonas para perros y gatos reduce significativamente el estrés durante la hospitalización. Y nuestro equipo mantiene a las familias informadas en todo momento.",
  },
  {
    slug: "peluqueria",
    name: "Peluquería",
    shortDescription:
      "Estilistas especializados en razas caninas y felinas. Cortes, stripping y baños terapéuticos con indicación veterinaria.",
    icon: "Scissors",
    heroDescription:
      "Peluquería especializada canina y felina. Cortes por razas y baños terapéuticos prescritos por veterinario.",
    description: [
      "Nuestra peluquería está dirigida por estilistas con formación específica en razas caninas y felinas. Conocen las necesidades de cada tipo de pelo y aplican técnicas adecuadas como stripping, trimming y cortes de exposición.",
      "Lo que nos diferencia: al estar dentro de una clínica veterinaria, nuestros estilistas pueden detectar problemas de piel durante el grooming y consultar directamente con el equipo veterinario. Además, realizamos baños terapéuticos prescritos por el veterinario para tratar problemas dermatológicos.",
    ],
    includes: [
      "Baño y secado",
      "Corte por razas",
      "Stripping y trimming",
      "Baños terapéuticos con prescripción veterinaria",
      "Corte de uñas y limpieza de oídos",
      "Tratamientos antiparasitarios",
    ],
    whenNeeded: [
      "Tu perro o gato necesita un corte o baño profesional",
      "Tu veterinario le ha prescrito baños terapéuticos",
      "Quieres un corte específico de raza",
      "Necesitas un deslanado o stripping profesional",
    ],
    whyMimos:
      "Nuestros estilistas son también auxiliares veterinarios. Eso significa que si detectan algo raro en la piel, pelo u oídos de tu mascota durante el grooming, pueden consultarlo directamente con el veterinario sin esperar a otra cita.",
  },
  {
    slug: "alimentacion",
    name: "Alimentación y Nutrición",
    shortDescription:
      "Asesoramiento nutricional personalizado. Piensos premium, dietas BARF y dietas de prescripción veterinaria.",
    icon: "Apple",
    heroDescription:
      "Asesoramiento nutricional personalizado y acceso a las mejores marcas de alimentación veterinaria.",
    description: [
      "La alimentación es uno de los pilares fundamentales de la salud de tu mascota. En MIMOS te asesoramos de forma personalizada sobre la dieta más adecuada según la edad, raza, nivel de actividad y posibles patologías de tu animal.",
      "Disponemos de piensos premium de las mejores marcas, dietas de prescripción veterinaria para patologías específicas y asesoramiento sobre dietas naturales tipo BARF para quienes buscan una alimentación alternativa supervisada.",
    ],
    includes: [
      "Asesoramiento nutricional personalizado",
      "Piensos premium y gama veterinaria",
      "Dietas de prescripción para patologías",
      "Orientación sobre dietas BARF",
      "Control de peso y programas de adelgazamiento",
      "Suplementos y nutracéuticos",
    ],
    whenNeeded: [
      "Acabas de adoptar una mascota y no sabes qué alimentación darle",
      "Tu mascota tiene sobrepeso u obesidad",
      "Ha sido diagnosticada con una enfermedad que requiere dieta especial",
      "Quieres explorar alternativas como la dieta BARF",
    ],
    whyMimos:
      "No vendemos pienso sin más: te asesoramos. Nuestros veterinarios conocen a tu mascota y pueden recomendarte la dieta exacta que necesita según su estado de salud actual.",
  },
  {
    slug: "servicios-domicilio",
    name: "Servicios a Domicilio",
    shortDescription:
      "Atención veterinaria en tu hogar en Zarandona y zona norte de Murcia. Consulta disponibilidad.",
    icon: "Home",
    heroDescription:
      "Atención veterinaria en tu hogar para mascotas que sufren estrés en la clínica o tienen movilidad reducida.",
    description: [
      "Sabemos que hay situaciones en las que el desplazamiento a la clínica no es fácil: mascotas con movilidad reducida, animales con alto nivel de estrés en el coche o en la consulta, o propietarios con dificultades para desplazarse.",
      "Para estos casos, ofrecemos servicio veterinario a domicilio en Zarandona y toda la zona norte de Murcia. Consultas, vacunaciones, toma de muestras y más — en la comodidad y tranquilidad de tu hogar.",
    ],
    includes: [
      "Consultas veterinarias a domicilio",
      "Vacunaciones y desparasitaciones",
      "Toma de muestras para laboratorio",
      "Revisiones geriátricas en casa",
      "Certificados y documentación",
      "Cobertura en Zarandona y zona norte de Murcia",
    ],
    whenNeeded: [
      "Tu mascota sufre mucho estrés en el coche o la clínica",
      "Tienes un animal de edad avanzada con movilidad reducida",
      "No puedes desplazarte a la clínica",
      "Necesitas vacunación o revisión rutinaria y prefieres hacerlo en casa",
    ],
    whyMimos:
      "Es el mismo equipo que te atiende en consulta — con la ventaja de que viene a tu casa. Tu mascota se siente en su entorno seguro y tú no tienes que preocuparte por el transporte.",
  },
];

export const serviciosDestacados = servicios.filter((s) =>
  [
    "medicina-preventiva",
    "diagnostico-imagen",
    "cirugia",
    "laboratorio",
    "peluqueria",
  ].includes(s.slug)
);
