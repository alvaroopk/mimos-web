"use client";

import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonios } from "@/data/testimonios";

export default function Testimonios() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const updateButtons = () => {
      if (prevBtnRef.current) {
        prevBtnRef.current.disabled = !emblaApi.canScrollPrev();
      }
      if (nextBtnRef.current) {
        nextBtnRef.current.disabled = !emblaApi.canScrollNext();
      }
    };
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
    updateButtons();
    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 lg:py-28 bg-neutral-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Lo que dicen los dueños de nuestros pacientes
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Más de 9 años construyendo confianza en Murcia.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonios.map((testimonio) => (
                <div
                  key={testimonio.author}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-foreground/80 text-sm leading-relaxed flex-1 italic">
                      &ldquo;{testimonio.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="mt-4 flex items-center gap-3 pt-4 border-t border-neutral-light">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold text-sm">
                        {testimonio.initial}
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {testimonio.author}
                        </p>
                        <p className="text-foreground/60 text-xs">
                          {testimonio.pet}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              ref={prevBtnRef}
              onClick={scrollPrev}
              aria-label="Testimonio anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm border border-neutral-light disabled:opacity-50 hover:bg-neutral-light transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              ref={nextBtnRef}
              onClick={scrollNext}
              aria-label="Testimonio siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm border border-neutral-light disabled:opacity-50 hover:bg-neutral-light transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
