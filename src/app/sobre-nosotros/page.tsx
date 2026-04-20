import type { Metadata } from "next";
import SobreNosotrosContent from "./SobreNosotrosContent";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce la historia de Centro Veterinario MIMOS. Más de 9 años cuidando mascotas en la zona norte de Murcia con un equipo de 6 profesionales.",
};

export default function SobreNosotrosPage() {
  return <SobreNosotrosContent />;
}
