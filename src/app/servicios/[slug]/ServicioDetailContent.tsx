"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import type { Servicio } from "@/data/servicios";

interface Props {
  servicio: Servicio;
}

export default function ServicioDetailContent({ servicio }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-primary-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>{" "}
            &gt;{" "}
            <Link href="/servicios" className="hover:text-white">
              Servicios
            </Link>{" "}
            &gt; <span className="text-white">{servicio.name}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {servicio.name}
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            {servicio.heroDescription}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-foreground/80 leading-relaxed text-lg"
          >
            {servicio.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>

          {/* What's included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Lo que incluye
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {servicio.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground/80"
                >
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* When needed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              ¿Cuándo necesito este servicio?
            </h2>
            <ul className="space-y-3">
              {servicio.whenNeeded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground/80"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent text-xs font-bold flex-shrink-0">
                    ?
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Why MIMOS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 rounded-xl bg-neutral-light p-8"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ¿Por qué en MIMOS?
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              {servicio.whyMimos}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={CONTACT.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
            >
              <Calendar className="h-5 w-5" />
              Pedir cita para este servicio
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-base font-semibold text-white hover:bg-[#25D366]/90 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Consultar por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
