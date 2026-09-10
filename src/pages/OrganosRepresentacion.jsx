import Hero from '../components/Hero'
import TopicCard from '../components/TopicCard'

export default function OrganosRepresentacion() {
  return (
    <>
      <Hero tone="purple" eyebrow="Gobierno de Nuevo León" title="Órganos de representación">
        El Consejo Consultivo de Fomento a la Sociedad Civil Organizada y el Comité Técnico
        para el Fomento de las Actividades de la Sociedad Civil de Nuevo León son instancias
        clave para impulsar el fortalecimiento, desarrollo y participación de las
        Organizaciones de la Sociedad Civil en el estado.
      </Hero>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="mb-6 text-2xl font-bold text-navy">¿Cuáles son los Órganos de Representación?</h2>
        <p className="mb-4 leading-relaxed text-navy/70">
          El <strong>Consejo Consultivo de Fomento a la Sociedad Civil</strong> es un órgano de
          asesoría y consulta que promueve la colaboración entre gobierno y organizaciones de la
          sociedad civil, con el propósito de impulsar políticas públicas más inclusivas,
          participativas y efectivas.
        </p>
        <p className="mb-10 leading-relaxed text-navy/70">
          Por su parte, el <strong>Comité Técnico de Fomento a las Actividades de las
          Organizaciones de la Sociedad Civil</strong> es el órgano consultivo y propositivo del
          Ejecutivo del Estado encargado de emitir propuestas y opiniones en materia de
          políticas públicas orientadas al fortalecimiento y fomento de las actividades
          realizadas por las organizaciones de la sociedad civil.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <TopicCard
            to="/organos-de-representacion/comite"
            tone="green"
            title="Comité"
            description="Comité Técnico para el Fomento de las Actividades de las Organizaciones de la Sociedad Civil (CFTA)."
          />
          <TopicCard
            to="/organos-de-representacion/consejo"
            tone="pink"
            title="Consejo"
            description="Consejo Consultivo de Fomento a la Sociedad Civil (CCFSC)."
          />
        </div>
      </section>
    </>
  )
}
