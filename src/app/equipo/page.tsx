import type { Metadata } from "next";
import EquipoPageContent from "./EquipoPageContent";

export const metadata: Metadata = {
  title: "Nuestro Equipo",
  description:
    "Conoce al equipo de Centro Veterinario MIMOS: 6 profesionales especializados comprometidos con la salud de tu mascota.",
};

export default function EquipoPage() {
  return <EquipoPageContent />;
}
