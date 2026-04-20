"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart, MessageSquare, MapPin } from "lucide-react";

const valores = [
  {
    icon: Award,
    title: "Calidad médica",
    description:
      "Formación continua del equipo e inversión constante en tecnología. La medicina de calidad no es negociable.",
  },
  {
    icon: Heart,
    title: "Trato compasivo",
    description:
      "Cada mascota es única. Cada dueño tiene sus miedos y preguntas. Nos tomamos el tiempo de escuchar y explicar.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación honesta",
    description:
      "Te decimos lo que necesitas saber, de forma clara y sin tecnicismos innecesarios. Tu tranquilidad también forma parte del tratamiento.",
  },
  {
    icon: MapPin,
    title: "Cercanía de barrio",
    description:
      "Somos el veterinario de tu zona. Conocemos a tus mascotas, sabemos su historial y estamos aquí cuando nos necesitas.",
  },
];

const galleryImages = [
  { src: "/assets/hero_slider.jpg", alt: "Instalaciones Centro Veterinario MIMOS" },
  { src: "/assets/quienes_somos.jpg", alt: "Equipo de MIMOS" },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    alt: "Consulta veterinaria moderna",
  },
  {
    src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&q=80",
    alt: "Mascota en consulta veterinaria",
  },
];

export default function SobreNosotrosContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/quienes_somos.jpg"
            alt="Centro Veterinario MIMOS"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-dark/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Nueve años cuidando mascotas en Murcia
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            MIMOS no es solo una clínica veterinaria. Es el resultado de años de
            trabajo, formación y compromiso con las mascotas de la zona norte de
            Murcia y sus familias.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Una historia de crecimiento
            </h2>
            <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
              <p>
                Centro Veterinario MIMOS abrió sus puertas en 2015 en la zona
                norte de Murcia con un objetivo claro: ofrecer medicina
                veterinaria de verdadera calidad sin que los dueños tuvieran que
                desplazarse al centro de la ciudad o a grandes hospitales
                veterinarios.
              </p>
              <p>
                Desde el primer día, el equipo apostó por la formación continua,
                la inversión en equipamiento y, sobre todo, por tratar a cada
                mascota como si fuera la única. La respuesta de las familias de
                Zarandona y la zona norte de Murcia fue tan positiva que en 9
                años hemos crecido hasta ser un equipo de 6 profesionales y
                hemos reformado las instalaciones en dos ocasiones para seguir
                mejorando.
              </p>
              <p>
                Hoy MIMOS ofrece una cartera de servicios que va desde la
                medicina preventiva hasta la cirugía endoscópica mínimamente
                invasiva, pasando por laboratorio propio, diagnóstico por imagen
                de última generación y una especialización felina que pocos
                centros de la región pueden igualar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 lg:py-28 bg-neutral-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-14"
          >
            Lo que nos guía
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto">
                  <valor.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {valor.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {valor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground">
              Instalaciones pensadas para tu mascota
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Hemos reformado el centro dos veces desde 2015 para contar con las
              mejores instalaciones posibles: quirófano totalmente equipado, sala
              de hospitalización separada para perros y gatos, laboratorio
              propio, equipo de diagnóstico por imagen de última generación y
              peluquería especializada.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
