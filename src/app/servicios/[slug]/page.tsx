import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicios } from "@/data/servicios";
import ServicioDetailContent from "./ServicioDetailContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.slug === slug);
  if (!servicio) return {};
  return {
    title: `${servicio.name} — Veterinario en Murcia`,
    description: servicio.shortDescription,
  };
}

export default async function ServicioPage({ params }: PageProps) {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.slug === slug);
  if (!servicio) notFound();
  return <ServicioDetailContent servicio={servicio} />;
}
