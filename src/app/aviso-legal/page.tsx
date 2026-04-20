import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal de Centro Veterinario MIMOS.",
};

export default function AvisoLegalPage() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Aviso Legal
        </h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
            de Servicios de la Sociedad de la Información y Comercio Electrónico,
            se informa a los usuarios de lo siguiente:
          </p>
          <h2>Datos identificativos</h2>
          <ul>
            <li><strong>Denominación social:</strong> Centro Veterinario MIMOS</li>
            <li><strong>Domicilio:</strong> C. Juan Alarcón Borja, 1, 30007 Murcia</li>
            <li><strong>Teléfono:</strong> 968 40 50 37</li>
            <li><strong>Email:</strong> info@cvmimos.com</li>
          </ul>
          <h2>Condiciones de uso</h2>
          <p>
            [Contenido legal pendiente de revisión por el cliente. Este texto
            debe ser sustituido por el aviso legal completo del negocio antes de
            la publicación definitiva de la web.]
          </p>
          <h2>Propiedad intelectual</h2>
          <p>
            [Contenido legal pendiente de revisión por el cliente.]
          </p>
          <h2>Limitación de responsabilidad</h2>
          <p>
            [Contenido legal pendiente de revisión por el cliente.]
          </p>
        </div>
      </div>
    </section>
  );
}
