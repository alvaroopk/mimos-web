"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { equipoPreview } from "@/data/equipo";

export default function EquipoPreview() {
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
            Un equipo que cuida con pasión
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Veterinarios especializados, auxiliares técnicos y estilistas —
            todos comprometidos con el bienestar de tu mascota.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipoPreview.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm">{member.role}</p>
              {member.specialty && (
                <p className="text-foreground/60 text-sm mt-1">
                  {member.specialty}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/equipo"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Conoce a todo el equipo
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
