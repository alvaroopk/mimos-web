"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  Cat,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { useState } from "react";

const adaptaciones = [
  "Sala de espera con zonas separadas para perros y gatos",
  "Consultas con superficies y materiales adaptados para felinos",
  "Protocolos de manejo de bajo estrés (certificación cat-friendly)",
  "Hospitalización en zona separada de los perros",
  "Zona de aislamiento para gatos con enfermedades infecciosas",
];

const serviciosFelinos = [
  "Vacunaciones y desparasitaciones adaptadas a gatos indoor y outdoor",
  "Diagnóstico y tratamiento de enfermedades crónicas felinas (IRC, hipertiroidismo, diabetes...)",
  "Diagnóstico por imagen (ecografía abdominal, radiología)",
  "Laboratorio propio para análisis felinos",
  "Cirugía general y esterilización",
  "Hospitalización en zona exclusiva para gatos",
  "Asesoramiento nutricional felino (dietas húmedas, BARF felino, dietas de prescripción)",
  "Control de peso y obesidad felina",
];

const faqs = [
  {
    question: "¿Con qué frecuencia debo llevar a mi gato al veterinario?",
    answer:
      "Para gatos adultos sanos, recomendamos al menos una revisión anual. Para gatos mayores de 7 años, dos revisiones al año. Los gatitos deben seguir el plan de vacunación inicial con visitas más frecuentes el primer año.",
  },
  {
    question: "¿Mi gato necesita vacunas aunque sea de interior?",
    answer:
      "Sí. Incluso los gatos que no salen al exterior deben vacunarse contra la panleucopenia y el herpesvirus, entre otros. Existen virus que pueden entrar en casa en la ropa o zapatos. En MIMOS te asesoramos sobre el plan de vacunación adecuado para tu gato específico.",
  },
  {
    question: "¿Cómo sé si mi gato está enfermo si no se queja?",
    answer:
      "Los gatos ocultan el malestar. Señales a tener en cuenta: cambio en el apetito, más o menos bebida de lo habitual, cambio en el uso del arenero, letargia, cambio en el grooming o en el comportamiento social. Si notas algo diferente, es mejor consultar.",
  },
  {
    question: "¿Tiene MIMOS zona de espera separada para gatos?",
    answer:
      "Sí. Entendemos que esperar junto a perros es estresante para los gatos. Hemos diseñado el espacio para minimizar ese contacto y estrés durante la visita.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-light last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="pb-5 text-foreground/70 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function MedicinaFelinaContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-primary-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-secondary mb-4">
                <Cat className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Especialistas en gatos
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Veterinario especializado en gatos en Murcia
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Los gatos no son perros pequeños. En MIMOS lo sabemos, y por eso
                hemos adaptado nuestras instalaciones, protocolos y formación
                para que la visita al veterinario sea lo menos estresante posible
                para tu gato.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={CONTACT.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
                >
                  <Calendar className="h-5 w-5" />
                  Pedir cita para mi gato
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
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <Image
                src="/assets/mascotas_hero.png"
                alt="Gato en Centro Veterinario MIMOS"
                width={500}
                height={400}
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why cats need specialists */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              El gato tiene necesidades veterinarias únicas
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Los gatos son animales que ocultan el dolor y la enfermedad de
              forma instintiva. Detectar un problema a tiempo requiere un
              veterinario que conozca sus patrones de comportamiento, sus señales
              de estrés y las enfermedades más frecuentes en felinos. En MIMOS,
              nuestra directora Ester Evangelio tiene formación específica en
              medicina felina y hemos diseñado el centro para que tu gato se
              sienta lo más tranquilo posible.
            </p>
            <ul className="space-y-3">
              {adaptaciones.map((item) => (
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
        </div>
      </section>

      {/* Feline services */}
      <section className="py-20 lg:py-28 bg-neutral-light">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Todo lo que necesita tu gato
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {serviciosFelinos.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground/80"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Ester specialist */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/assets/equipo_ester.jpg"
                alt="Ester Evangelio — Especialista en Medicina Felina"
                width={200}
                height={200}
                className="rounded-xl object-cover object-top w-full h-auto aspect-square"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Tu gato en las mejores manos
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Ester Evangelio, directora del Centro Veterinario MIMOS, ha
                dedicado especial atención a la medicina felina a lo largo de su
                carrera. Su formación continua en esta especialidad y su enfoque
                de bajo estrés hacen que muchos gatos — incluso los más
                nerviosos — toleren las consultas mucho mejor de lo esperado.
              </p>
              <a
                href={CONTACT.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
              >
                <Calendar className="h-4 w-4" />
                Pedir cita con Ester
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-neutral-light">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Preguntas frecuentes sobre la salud de tu gato
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                ¿Más preguntas? Escríbenos por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
