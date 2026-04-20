import type { Metadata } from "next";
import MedicinaFelinaContent from "./MedicinaFelinaContent";

export const metadata: Metadata = {
  title: "Veterinario especializado en gatos en Murcia",
  description:
    "Medicina felina especializada en Murcia. Instalaciones adaptadas, protocolos de bajo estrés y veterinaria con formación específica en gatos. Pide cita.",
};

export default function MedicinaFelinaPage() {
  return <MedicinaFelinaContent />;
}
