import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Centro Veterinario MIMOS.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Política de Privacidad
        </h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p>
            En Centro Veterinario MIMOS tratamos la información que nos
            facilitas con el fin de prestarte los servicios solicitados y
            realizar la facturación de los mismos.
          </p>
          <h2>Responsable del tratamiento</h2>
          <ul>
            <li><strong>Denominación social:</strong> Centro Veterinario MIMOS</li>
            <li><strong>Domicilio:</strong> C. Juan Alarcón Borja, 1, 30007 Murcia</li>
            <li><strong>Email:</strong> info@cvmimos.com</li>
          </ul>
          <h2>Finalidad del tratamiento</h2>
          <p>
            Los datos personales recogidos a través del formulario de contacto
            serán utilizados exclusivamente para gestionar tu consulta y darte
            respuesta. No serán cedidos a terceros sin tu consentimiento.
          </p>
          <h2>Base legal</h2>
          <p>
            [Contenido legal pendiente de revisión por el cliente. Este texto
            debe ser sustituido por la política de privacidad completa del
            negocio antes de la publicación definitiva de la web.]
          </p>
          <h2>Derechos del interesado</h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión,
            oposición, limitación del tratamiento y portabilidad de datos
            enviando un email a info@cvmimos.com.
          </p>
          <h2>Cookies</h2>
          <p>
            [Contenido sobre cookies pendiente de revisión por el cliente.]
          </p>
        </div>
      </div>
    </section>
  );
}
