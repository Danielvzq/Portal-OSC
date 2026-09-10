import Hero from '../components/Hero'

export default function Comite() {
  return (
    <>
      <Hero tone="green" eyebrow="Órganos de representación" title="Comité">
        Comité Técnico para el Fomento de las Actividades de las Organizaciones de la Sociedad
        Civil (CFTA).
      </Hero>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <p className="mb-6 leading-relaxed text-navy/70">
          El Comité Técnico de Fomento a las Actividades de las Organizaciones de la Sociedad
          Civil es el órgano consultivo y propositivo encargado de emitir recomendaciones y
          propuestas orientadas al fortalecimiento de las políticas públicas y al impulso de las
          actividades realizadas por las organizaciones de la sociedad civil.
        </p>
        <div className="rounded-xl2 border border-black/5 bg-white p-8 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-navy">Integrantes</h2>
          <p className="text-sm text-navy/70">
            Agrega aquí la lista de integrantes vigentes del Comité (nombre y cargo) cuando la
            Secretaría la confirme.
          </p>
        </div>
      </section>
    </>
  )
}
