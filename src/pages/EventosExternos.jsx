import Hero from '../components/Hero'
import { BOLETIN_VOSCES } from '../data/documentos'

export default function EventosExternos() {
  return (
    <>
      <Hero tone="orange" eyebrow="Programa de Fomento" title="Eventos Externos">
        Infórmate sobre los eventos externos organizados por aliados de la Secretaría de
        Igualdad e Inclusión, y conoce iniciativas, actividades y espacios de encuentro
        impulsados por diversas instituciones y organizaciones comprometidas con el desarrollo
        social.
      </Hero>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="mb-2 text-2xl font-bold text-navy">Boletín vOSCes</h2>
        <p className="mb-8 max-w-2xl text-navy/70">
          Este boletín está creado para mantenerte informado sobre las últimas convocatorias,
          cursos y talleres ofrecidos por nuestros aliados, quienes trabajan para ofrecer
          capacidades en temas como desarrollo de competencias, creación de redes, impacto
          social, evaluación y rendición de cuentas, entre otros.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BOLETIN_VOSCES.map((boletin) =>
            boletin.url ? (
              <a
                key={boletin.vol}
                href={boletin.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl2 border-t-4 border-brand-orange bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                  {boletin.periodo}
                </p>
                <p className="text-xl font-bold text-navy">Vol. {boletin.vol}</p>
                <span className="mt-2 inline-block text-sm font-semibold text-brand-orangeDark">
                  Ver boletín →
                </span>
              </a>
            ) : (
              <div
                key={boletin.vol}
                className="rounded-xl2 border-t-4 border-navy/10 bg-brand-cream p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/40">
                  {boletin.periodo}
                </p>
                <p className="text-xl font-bold text-navy/40">Vol. {boletin.vol}</p>
                <span className="mt-2 inline-block text-xs text-navy/40">
                  Falta el enlace — agrégalo en <code>src/data/documentos.js</code>
                </span>
              </div>
            ),
          )}
        </div>
      </section>
    </>
  )
}
