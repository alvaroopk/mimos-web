import type { Metadata } from "next";
import ServiciosPageContent from "./ServiciosPageContent";

export const metadata: Metadata = {
  title: "Servicios Veterinarios",
  description:
    "Todos los servicios veterinarios que tu mascota necesita en un solo centro. Medicina preventiva, cirugía, diagnóstico por imagen, laboratorio, peluquería y más.",
};

export default function ServiciosPage() {
  return <ServiciosPageContent />;
}
