import Hero from '../components/Hero'
import {
  REGISTRO_OSC_FORM,
  REGISTRO_OSC_DOCUMENTOS,
  ACREDITACION_ACTIVIDADES_URL,
  ACREDITACION_ACTIVIDADES_CORREO,
} from '../data/documentos'

function Etapa({ numero, titulo, children }) {
  return (
    <div className="border-b border-black/5 py-8 first:pt-0 last:border-b-0">
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-brand-orangeDark">
        Etapa {numero}
      </p>
      <h3 className="mb-3 text-lg font-bold text-navy">{titulo}</h3>
      <div className="leading-relaxed text-navy/70">{children}</div>
    </div>
  )
}

export default function Tramites() {
  return (
    <>
      <Hero tone="yellow" eyebrow="Programa de Fomento" title="Trámites">
        En este apartado encontrarás una guía paso a paso sobre los requisitos necesarios para
        registrar tu Organización de la Sociedad Civil, así como para realizar las solicitudes
        de acreditación de actividades.
      </Hero>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="mb-6 text-2xl font-bold text-navy">Registro de OSC</h2>

        <Etapa numero={1} titulo="Llenado de solicitud">
          <p className="mb-2">
            El primer paso para registrar tu Organización es completar la solicitud
            correspondiente.
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Accede al Formulario:{' '}
              <a href={REGISTRO_OSC_FORM} target="_blank" rel="noreferrer" className="font-semibold text-brand-orangeDark underline">
                Haz clic aquí
              </a>
              .
            </li>
            <li>
              Completa la Información: llena todos los campos del formulario con información
              precisa y actualizada sobre tu organización, sus objetivos y actividades.
            </li>
          </ul>
        </Etapa>

        <Etapa numero={2} titulo="Adjunta los documentos requeridos">
          <p className="mb-3">Asegúrate de incluir los documentos necesarios:</p>
          <ol className="list-decimal space-y-2 pl-5">
            {REGISTRO_OSC_DOCUMENTOS.map((doc) => (
              <li key={doc.slice(0, 30)}>{doc}</li>
            ))}
          </ol>
        </Etapa>

        <Etapa numero={3} titulo="Gratuito o de costo">
          Sin costo.
        </Etapa>

        <Etapa numero={4} titulo="A dónde acudir">
          Secretaría de Igualdad e Inclusión del Estado.
        </Etapa>

        <Etapa numero={5} titulo="Agendar visita">
          Se agenda una visita a la organización.
        </Etapa>

        <Etapa numero={6} titulo="Oficio de notificación">
          Se notifica a la organización que ha sido dada de alta.
        </Etapa>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-20">
        <h2 className="mb-6 text-2xl font-bold text-navy">Acreditación de Actividades</h2>

        <Etapa numero={1} titulo="Llenado de solicitud">
          <p className="mb-2">
            El primer paso para acreditar tus actividades es completar la solicitud
            correspondiente.
          </p>
          <a href={ACREDITACION_ACTIVIDADES_URL} target="_blank" rel="noreferrer" className="font-semibold text-brand-orangeDark underline">
            Accede a los requisitos: Haz clic aquí
          </a>
        </Etapa>

        <Etapa numero={2} titulo="Gratuito o de costo">
          Sin costo.
        </Etapa>

        <Etapa numero={3} titulo="Enviar documentos">
          <a href={`mailto:${ACREDITACION_ACTIVIDADES_CORREO}`} className="font-semibold text-brand-orangeDark underline">
            {ACREDITACION_ACTIVIDADES_CORREO}
          </a>
        </Etapa>
      </section>
    </>
  )
}
