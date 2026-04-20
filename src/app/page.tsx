import Hero from "@/components/sections/Hero";
import ServiciosDestacados from "@/components/sections/ServiciosDestacados";
import PorQueElegirnos from "@/components/sections/PorQueElegirnos";
import EquipoPreview from "@/components/sections/EquipoPreview";
import Testimonios from "@/components/sections/Testimonios";
import CTAUrgencias from "@/components/sections/CTAUrgencias";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiciosDestacados />
      <PorQueElegirnos />
      <EquipoPreview />
      <Testimonios />
      <CTAUrgencias />
    </>
  );
}
