import Hero from '../components/Hero'

export default function EventosExternos() {
  return (
    <>
      <Hero tone="orange" eyebrow="Programa de Fomento" title="Eventos Externos">
        Infórmate sobre los eventos externos organizados por aliados de la Secretaría de
        Igualdad e Inclusión, y conoce iniciativas, actividades y espacios de encuentro
        impulsados por diversas instituciones y organizaciones comprometidas con el desarrollo
        social.
      </Hero>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="rounded-xl2 border border-black/5 bg-white p-8 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-navy">Próximos eventos</h2>
          <p className="text-navy/70">
            Aquí se listarán los eventos externos vigentes. Añade cada evento con fecha, sede y
            liga de registro conforme la Secretaría los confirme.
          </p>
        </div>
      </section>
    </>
  )
}
