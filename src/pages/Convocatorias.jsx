import Hero from '../components/Hero'

export default function Convocatorias() {
  return (
    <>
      <Hero tone="purple" eyebrow="Programa de Fomento" title="Convocatorias y Resultados">
        Explora nuestras convocatorias y consulta los resultados organizados por categoría y
        fecha. Mantente informado sobre programas, apoyos y resultados para identificar
        oportunidades que fortalezcan el crecimiento y desarrollo de tu organización.
      </Hero>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="rounded-xl2 border border-black/5 bg-white p-8 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-navy">Bases de la convocatoria</h2>
          <p className="mb-6 text-navy/70">
            Aquí se publicarán las bases vigentes de la convocatoria del Programa de Fomento,
            así como los resultados de ciclos anteriores. Sustituye este bloque con el documento
            o enlace oficial cuando esté disponible.
          </p>
          <span className="pill-btn-dark cursor-not-allowed opacity-60">Próximamente</span>
        </div>
      </section>
    </>
  )
}
