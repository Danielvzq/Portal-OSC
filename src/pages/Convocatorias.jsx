import Hero from '../components/Hero'
import Accordion from '../components/Accordion'
import { CONVOCATORIA_COMUNICADO, CONVOCATORIAS_BASES, CONVOCATORIAS_RESULTADOS } from '../data/documentos'

export default function Convocatorias() {
  return (
    <>
      <Hero tone="orange" eyebrow="Programa de Fomento" title="Convocatorias">
        Conoce las bases de las convocatorias y sus resultados.
      </Hero>

      <div className="bg-brand-orange/90 px-5 py-4 text-center text-white">
        <p className="font-semibold">{CONVOCATORIA_COMUNICADO.titulo}</p>
        <a
          href={CONVOCATORIA_COMUNICADO.url}
          target="_blank"
          rel="noreferrer"
          className="font-bold underline underline-offset-4"
        >
          Comunicado
        </a>
      </div>

      <section className="mx-auto max-w-4xl px-5 py-14">
        <p className="mb-4 leading-relaxed text-navy/70">
          A continuación, encontrarás las bases de las convocatorias dirigidas a las
          Organizaciones de la Sociedad Civil, así como sus respectivos resultados. En este
          espacio podrás consultar información relevante sobre los requisitos de participación,
          criterios de selección y fechas importantes.
        </p>
        <p className="leading-relaxed text-navy/70">
          Asimismo, tendrás acceso a los resultados de convocatorias anteriores, lo que te
          permitirá conocer las oportunidades disponibles y el impacto generado por los
          proyectos apoyados.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 rounded-full bg-brand-orange px-5 py-2 text-center font-bold text-white">
              Bases de las Convocatorias
            </h2>
            <Accordion items={CONVOCATORIAS_BASES} />
          </div>
          <div>
            <h2 className="mb-4 rounded-full bg-brand-orange px-5 py-2 text-center font-bold text-white">
              Resultados de las Convocatorias
            </h2>
            <Accordion items={CONVOCATORIAS_RESULTADOS} />
          </div>
        </div>
      </section>
    </>
  )
}
