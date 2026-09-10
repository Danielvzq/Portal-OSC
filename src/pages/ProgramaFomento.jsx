import Hero from '../components/Hero'
import TopicCard from '../components/TopicCard'

export default function ProgramaFomento() {
  return (
    <>
      <Hero tone="orange" eyebrow="Gobierno de Nuevo León" title="Programa de Fomento">
        El Programa de Fomento fortalece a las Organizaciones de la Sociedad Civil mediante
        apoyos orientados al desarrollo de proyectos sociales con impacto positivo y sostenible
        en Nuevo León.
      </Hero>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-navy">¿Qué es el Programa de Fomento?</h2>
            <p className="mb-4 leading-relaxed text-navy/70">
              Su objetivo es impulsar iniciativas que contribuyan al bienestar de personas y
              comunidades en situación de vulnerabilidad, además de fortalecer las capacidades
              institucionales de las organizaciones.
            </p>
            <p className="leading-relaxed text-navy/70">
              A través de la colaboración entre gobierno, sociedad civil y comunidad, el
              programa fomenta la participación social y la construcción de un entorno más
              inclusivo y equitativo.
            </p>
          </div>
          <div className="grid gap-6">
            <TopicCard
              to="/programa-de-fomento/convocatorias-y-resultados"
              tone="purple"
              title="Convocatorias y Resultados"
              description="Explora las convocatorias vigentes y consulta resultados organizados por categoría y fecha."
            />
            <TopicCard
              to="/programa-de-fomento/tramites"
              tone="yellow"
              title="Trámites"
              description="Guía paso a paso para registrar tu OSC y solicitar acreditación de actividades."
            />
            <TopicCard
              to="/programa-de-fomento/eventos-externos"
              tone="pink"
              title="Eventos Externos"
              description="Eventos organizados por aliados de la Secretaría de Igualdad e Inclusión."
            />
          </div>
        </div>
      </section>
    </>
  )
}
