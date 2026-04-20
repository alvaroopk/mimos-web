import type { Metadata } from "next";
import ContactoPageContent from "./ContactoPageContent";

export const metadata: Metadata = {
  title: "Contacto y cita previa",
  description:
    "Contacta con Centro Veterinario MIMOS. Teléfono: 968 40 50 37, WhatsApp: 693 005 960. C. Juan Alarcón Borja, 1, 30007 Murcia. Pide cita online.",
};

export default function ContactoPage() {
  return <ContactoPageContent />;
}
