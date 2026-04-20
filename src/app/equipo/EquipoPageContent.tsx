"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { equipo } from "@/data/equipo";
import { CONTACT } from "@/lib/constants";

export default function EquipoPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/quienes_somos.jpg"
            alt="Equipo Centro Veterinario MIMOS"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-dark/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            El equipo que cuida a tu mascota
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            6 profesionales especializados comprometidos con la medicina de
            calidad y el trato cercano que tu mascota y tú merecéis.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-14">
            Conoce a nuestro equipo
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipo.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-light hover:shadow-md transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {member.role}
                  </p>
                  {member.specialty && (
                    <p className="text-accent text-xs font-medium mt-1">
                      {member.specialty}
                    </p>
                  )}
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-light">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-foreground/80 leading-relaxed">
            ¿Quieres conocernos en persona? Pide tu primera cita y descubre por
            qué miles de familias en la zona norte de Murcia confían en nosotros.
          </p>
          <a
            href={CONTACT.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
          >
            <Calendar className="h-5 w-5" />
            Pedir primera cita
          </a>
        </div>
      </section>
    </>
  );
}
