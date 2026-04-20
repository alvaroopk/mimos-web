export interface Testimonio {
  text: string;
  author: string;
  pet: string;
  initial: string;
}

export const testimonios: Testimonio[] = [
  {
    text: "Llevamos a nuestra perra Luna a MIMOS desde cachorra y nunca nos ha fallado el equipo. Ester nos explica siempre todo con mucha claridad y se nota que realmente le importa el bienestar de los animales.",
    author: "María G.",
    pet: "Luna (Golden Retriever)",
    initial: "M",
  },
  {
    text: "Gracias al diagnóstico rápido de MIMOS con su ecografía detectaron a tiempo un problema en el hígado de nuestro gato. Su conocimiento de medicina felina nos salvó a Simba.",
    author: "Carlos y Ana",
    pet: "Simba (Maine Coon)",
    initial: "C",
  },
  {
    text: "La peluquería es increíble. Jesús conoce la raza de nuestro perro perfectamente y siempre sale impecable. Y si hay algo que le note raro en la piel, avisa directamente al veterinario. Eso es servicio de verdad.",
    author: "Roberto M.",
    pet: "Tobi (Schnauzer)",
    initial: "R",
  },
  {
    text: "Llevamos 7 años viniendo a MIMOS. Han reformado las instalaciones dos veces desde entonces y cada vez mejor. El trato siempre es cercano, como si conocieran a tu mascota de toda la vida.",
    author: "Laura P.",
    pet: "Coco (Beagle)",
    initial: "L",
  },
];
