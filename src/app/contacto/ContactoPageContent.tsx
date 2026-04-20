"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Send,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  privacy: boolean;
}

export default function ContactoPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-primary-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Contacta con nosotros
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Estamos a tu disposición para resolver dudas, pedir cita o atender
            cualquier urgencia. Elige la forma de contacto que prefieras.
          </p>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Datos de contacto
              </h2>
              <div className="space-y-5">
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Teléfono</p>
                    <p className="font-semibold">{CONTACT.phone}</p>
                  </div>
                </a>

                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground hover:text-[#25D366] transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">WhatsApp</p>
                    <p className="font-semibold">{CONTACT.whatsapp}</p>
                  </div>
                </a>

                <a
                  href={CONTACT.emailHref}
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <p className="font-semibold">{CONTACT.email}</p>
                  </div>
                </a>

                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Dirección</p>
                    <p className="font-semibold">{CONTACT.address}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Horario</p>
                    <p className="font-semibold">Lunes a Viernes: 09:30 – 20:00</p>
                    <p className="text-sm text-foreground/60 mt-0.5">
                      Para urgencias fuera de horario, llama al {CONTACT.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8 flex gap-3">
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-light text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-light text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Envíanos un mensaje
              </h2>

              {submitted ? (
                <div className="rounded-xl bg-neutral-light p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20 text-secondary mx-auto mb-4">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Mensaje enviado
                  </h3>
                  <p className="mt-2 text-foreground/70">
                    Hemos recibido tu mensaje. Te responderemos lo antes posible.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                  noValidate
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Nombre *
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name", { required: "El nombre es obligatorio" })}
                      className="w-full rounded-lg border border-neutral-light px-4 py-2.5 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        Teléfono *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone", {
                          required: "El teléfono es obligatorio",
                        })}
                        className="w-full rounded-lg border border-neutral-light px-4 py-2.5 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "El email es obligatorio",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Email no válido",
                          },
                        })}
                        className="w-full rounded-lg border border-neutral-light px-4 py-2.5 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Asunto *
                    </label>
                    <select
                      id="subject"
                      {...register("subject", {
                        required: "Selecciona un asunto",
                      })}
                      className="w-full rounded-lg border border-neutral-light px-4 py-2.5 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="cita">Pedir cita</option>
                      <option value="consulta">Consulta general</option>
                      <option value="urgencia">Urgencia</option>
                      <option value="peluqueria">Presupuesto peluquería</option>
                      <option value="otro">Otro</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message", {
                        required: "El mensaje es obligatorio",
                      })}
                      className="w-full rounded-lg border border-neutral-light px-4 py-2.5 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-y"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      id="privacy"
                      type="checkbox"
                      {...register("privacy", {
                        required: "Debes aceptar la política de privacidad",
                      })}
                      className="mt-1 h-4 w-4 rounded border-neutral-light text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm text-foreground/70"
                    >
                      He leído y acepto la{" "}
                      <a
                        href="/politica-de-privacidad"
                        className="underline text-primary"
                      >
                        política de privacidad
                      </a>{" "}
                      *
                    </label>
                  </div>
                  {errors.privacy && (
                    <p className="text-sm text-red-600">
                      {errors.privacy.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Enviar mensaje
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.5!2d-1.135!3d38.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQy4gSnVhbiBBbGFyY8OzbiBCb3JqYSwgMSwgMzAwMDcgTXVyY2lh!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Centro Veterinario MIMOS"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              Cómo llegar — Ver en Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* CTA Booking */}
      <section className="py-16 bg-neutral-light">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            ¿Prefieres reservar directamente?
          </h2>
          <p className="mt-3 text-foreground/70">
            Usa nuestro sistema de reservas online para elegir el día y hora que
            mejor te venga, sin esperar llamadas ni confirmaciones.
          </p>
          <a
            href={CONTACT.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
          >
            <Calendar className="h-5 w-5" />
            Reservar cita online
          </a>
        </div>
      </section>
    </>
  );
}
