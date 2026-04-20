"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Stethoscope,
  ClipboardList,
  ScanLine,
  Microscope,
  Scissors,
  BedDouble,
  Apple,
  Home,
  Cat,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { servicios } from "@/data/servicios";
import { CONTACT } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Stethoscope,
  ClipboardList,
  ScanLine,
  Microscope,
  Scissors,
  BedDouble,
  Apple,
  Home,
  Cat,
};

export default function ServiciosPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero_slider.jpg"
            alt="Servicios Veterinarios MIMOS"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-dark/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>{" "}
            &gt; <span className="text-white">Servicios</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Todos los servicios que tu mascota necesita
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            En MIMOS encontrarás desde la revisión preventiva anual hasta las
            intervenciones más complejas. Con el equipo, el equipamiento y la
            experiencia que merece tu compañero.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-14"
          >
            ¿Qué necesitas hoy?
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => {
              const Icon = iconMap[servicio.icon] || ShieldCheck;
              const href =
                servicio.slug === "medicina-felina"
                  ? "/medicina-felina"
                  : `/servicios/${servicio.slug}`;
              return (
                <motion.div
                  key={servicio.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={href}
                    className="group block h-full rounded-xl border border-neutral-light bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-secondary"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-light text-primary group-hover:bg-secondary/20 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {servicio.name}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                      {servicio.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Ver más <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}

            {/* Medicina Felina card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Link
                href="/medicina-felina"
                className="group block h-full rounded-xl border border-neutral-light bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-secondary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-light text-primary group-hover:bg-secondary/20 transition-colors">
                  <Cat className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Medicina Felina
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  Especialización real en medicina felina con instalaciones
                  adaptadas para reducir el estrés de tu gato.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Ver más <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-14 text-center">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-base font-semibold text-white hover:bg-[#25D366]/90 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              ¿Tienes dudas? Escríbenos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
