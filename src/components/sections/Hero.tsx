"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, Clock, Users, FlaskConical, Cat } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const trustBadges = [
  { icon: Clock, text: "Desde 2015 en Murcia" },
  { icon: Users, text: "Equipo de 6 profesionales" },
  { icon: FlaskConical, text: "Laboratorio propio" },
  { icon: Cat, text: "Medicina Felina especializada" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero_slider.jpg"
          alt="Centro Veterinario MIMOS"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Tu mascota merece los mejores cuidados
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl">
              Centro Veterinario MIMOS — más de 9 años cuidando mascotas en la
              zona norte de Murcia. Medicina completa, equipo especializado y el
              trato cercano que tu familia merece.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={CONTACT.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
              >
                <Calendar className="h-5 w-5" />
                Pedir Cita Online
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-base font-semibold text-white hover:bg-[#25D366]/90 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Escríbenos por WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-white/80 text-xs sm:text-sm"
                >
                  <badge.icon className="h-4 w-4 flex-shrink-0 text-secondary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero image (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <Image
              src="/assets/mascotas_hero.png"
              alt="Mascotas felices en Centro Veterinario MIMOS"
              width={600}
              height={500}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
