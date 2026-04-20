"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function CTAUrgencias() {
  return (
    <section className="py-20 lg:py-28 bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            ¿Tu mascota necesita atención urgente?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Llámanos ahora o escríbenos por WhatsApp. Nuestro equipo está
            disponible para orientarte y darte cita lo antes posible.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-3 rounded-md bg-white px-8 py-4 text-lg font-semibold text-primary-dark hover:bg-white/90 transition-colors"
            >
              <Phone className="h-6 w-6" />
              Llamar ahora: {CONTACT.phone}
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md bg-[#25D366] px-8 py-4 text-lg font-semibold text-white hover:bg-[#25D366]/90 transition-colors"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp: {CONTACT.whatsapp}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-white/60 text-sm">
            <Clock className="h-4 w-4" />
            <span>Horario de consulta: Lunes a Viernes 09:30 – 20:00 · Sábados según disponibilidad</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
