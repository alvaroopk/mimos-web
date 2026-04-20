export interface TeamMember {
  name: string;
  role: string;
  specialty?: string;
  description: string;
  photo: string;
}

export const equipo: TeamMember[] = [
  {
    name: "Ester Evangelio",
    role: "Directora Veterinaria",
    specialty: "Medicina Felina",
    description:
      "Fundadora y alma del centro. Ester lleva más de 9 años construyendo MIMOS desde cero, con especial dedicación a la medicina felina y a crear un espacio donde tanto las mascotas como sus dueños se sientan cuidados.",
    photo: "/assets/equipo_ester.jpg",
  },
  {
    name: "Carmen Pérez",
    role: "Veterinaria",
    specialty: "Medicina Preventiva",
    description:
      "Carmen es la experta en mantener a las mascotas sanas antes de que enfermen. Su dominio de la medicina preventiva y su capacidad para explicar los planes de vacunación hacen que los propietarios se vayan siempre tranquilos.",
    photo: "/assets/equipo_carmen.jpg",
  },
  {
    name: "Inmaculada López",
    role: "Veterinaria",
    specialty: "Traumatología",
    description:
      "Inma aporta al equipo la especialización en traumatología — fundamental para cuando ocurren accidentes o problemas de movilidad que requieren una mirada experta.",
    photo: "/assets/equipo_inma.jpg",
  },
  {
    name: "Jesús Gómez",
    role: "Auxiliar Técnico Veterinario y Estilista Canino",
    description:
      "Jesús combina su formación como auxiliar técnico veterinario con su pasión por la estilística canina. Conoce a fondo las razas y sus necesidades específicas de pelaje, y su ojo clínico le permite detectar problemas de piel durante el grooming.",
    photo: "/assets/equipo_jesus.jpg",
  },
  {
    name: "Brilli Navarro",
    role: "Auxiliar Técnico Veterinario, Estilista Canino y Recepción",
    description:
      "Brilli es el primer punto de contacto de muchos clientes: siempre con una sonrisa en recepción, con las manos en el trabajo como auxiliar y con las tijeras en la peluquería. La energía del equipo.",
    photo: "/assets/equipo_brilli.jpg",
  },
  {
    name: "Manuel Martínez-Tafalla",
    role: "Gestión y Administración",
    description:
      "Manuel garantiza que todo funcione perfectamente entre bastidores: desde la gestión de citas hasta que la clínica esté siempre a punto. El engranaje que hace posible que el resto del equipo se dedique al 100% a las mascotas.",
    photo: "/assets/equipo_manuel.jpg",
  },
];

export const equipoPreview = equipo.slice(0, 3);
