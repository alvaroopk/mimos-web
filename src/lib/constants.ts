export const CONTACT = {
  phone: "968 40 50 37",
  phoneHref: "tel:+34968405037",
  whatsapp: "693 005 960",
  whatsappHref: "https://wa.me/34693005960?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n",
  whatsappSimple: "https://wa.me/34693005960",
  email: "info@cvmimos.com",
  emailHref: "mailto:info@cvmimos.com",
  address: "C. Juan Alarcón Borja, 1, 30007 Murcia",
  mapsUrl: "https://maps.app.goo.gl/5wyjd1AW5UKJpkyd6",
  bookingUrl: "#pedir-cita",
  schedule: "Lunes a Viernes: 09:30 – 20:00",
  facebook: "https://www.facebook.com/centroveterinariomimos",
  instagram: "https://www.instagram.com/centroveterinariomimos",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Medicina Felina", href: "/medicina-felina" },
  { label: "Equipo", href: "/equipo" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;
