import Hero from '../components/Hero'

export default function Consejo() {
  return (
    <>
      <Hero tone="pink" eyebrow="Órganos de representación" title="Consejo">
        Consejo Consultivo de Fomento a la Sociedad Civil (CCFSC).
      </Hero>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <p className="mb-6 leading-relaxed text-navy/70">
          El Consejo Consultivo de Fomento a la Sociedad Civil es un órgano de asesoría y
          consulta que fomenta la colaboración entre el gobierno y las organizaciones de la
          sociedad civil, con el objetivo de desarrollar políticas públicas más inclusivas y
          efectivas.
        </p>
        <div className="rounded-xl2 border border-black/5 bg-white p-8 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-navy">Integrantes</h2>
          <p className="text-sm text-navy/70">
            Agrega aquí la lista de integrantes vigentes del Consejo (nombre y cargo) cuando la
            Secretaría la confirme.
          </p>
        </div>
      </section>
    </>
  )
}
