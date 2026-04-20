"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Building2, Cpu, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "9 años de experiencia",
    description:
      "Fundados en 2015 en la zona norte de Murcia. Miles de mascotas atendidas por el mismo equipo de siempre.",
  },
  {
    icon: Building2,
    title: "Especialistas en un solo centro",
    description:
      "La mayoría de especialidades disponibles aquí mismo. Sin derivaciones innecesarias a otros centros.",
  },
  {
    icon: Cpu,
    title: "Equipamiento de vanguardia",
    description:
      "Uno de los equipos de radiología digital más modernos de la región. Laboratorio propio con resultados rápidos.",
  },
  {
    icon: Heart,
    title: "Trato cercano y personalizado",
    description:
      "Te explicamos cada diagnóstico con claridad. Porque la salud de tu mascota también depende de que tú entiendas lo que ocurre.",
  },
];

export default function PorQueElegirnos() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/assets/quienes_somos.jpg"
              alt="Equipo Centro Veterinario MIMOS"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-[400px] shadow-lg"
            />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              ¿Por qué confiar en MIMOS?
            </h2>
            <div className="grid gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
