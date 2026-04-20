"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ScanLine,
  Scissors,
  Microscope,
  Cat,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  ScanLine,
  Scissors,
  Microscope,
  Cat,
};

const serviciosHome = [
  {
    name: "Medicina Preventiva",
    icon: "ShieldCheck",
    description:
      "Planes de vacunación y desparasitación adaptados a cada etapa vital de tu mascota.",
    href: "/servicios/medicina-preventiva",
  },
  {
    name: "Diagnóstico por Imagen",
    icon: "ScanLine",
    description:
      "Radiología digital de última generación y ecografía en el propio centro — resultados inmediatos.",
    href: "/servicios/diagnostico-imagen",
  },
  {
    name: "Cirugía",
    icon: "Scissors",
    description:
      "Quirófano totalmente equipado para cirugía general, traumatología, odontología y endoscopia.",
    href: "/servicios/cirugia",
  },
  {
    name: "Laboratorio propio",
    icon: "Microscope",
    description:
      "Análisis de sangre, orina, citologías y serologías — sin esperar días por resultados externos.",
    href: "/servicios/laboratorio",
  },
  {
    name: "Medicina Felina",
    icon: "Cat",
    description:
      "Instalaciones y protocolo especialmente adaptados para que tu gato tenga la consulta menos estresante posible.",
    href: "/medicina-felina",
  },
  {
    name: "Peluquería",
    icon: "Scissors",
    description:
      "Peluquería especializada canina y felina. Cortes por razas y baños terapéuticos prescritos por veterinario.",
    href: "/servicios/peluqueria",
  },
];

export default function ServiciosDestacados() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Todo lo que tu mascota necesita, bajo un mismo techo
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Desde la primera vacuna hasta las intervenciones más complejas — en
            MIMOS encontrarás la atención completa que merece tu compañero.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviciosHome.map((servicio, index) => {
            const Icon = iconMap[servicio.icon] || ShieldCheck;
            return (
              <motion.div
                key={servicio.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={servicio.href}
                  className="group block h-full rounded-xl border border-neutral-light bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-secondary"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-light text-primary group-hover:bg-secondary/20 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {servicio.name}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    {servicio.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Más info <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary/90 transition-colors"
          >
            Ver todos los servicios
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
