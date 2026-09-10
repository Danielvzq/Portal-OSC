import Hero from '../components/Hero'
import {
  CONSEJO_INTRO,
  CONSEJO_ATRIBUCIONES,
  CONSEJO_INTEGRANTES,
  CONSEJO_CONTACTO,
  ORGANOS_INFORMES,
} from '../data/documentos'

function iniciales(nombre) {
  return nombre
    .split(' ')
    .filter((w) => w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

function Avatar({ nombre }) {
  return (
    <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-orangeDark text-lg font-bold text-white">
      {iniciales(nombre)}
    </div>
  )
}

export default function Consejo() {
  return (
    <>
      <Hero tone="pink" eyebrow="Órganos de representación" title="Consejo">
        Consejo Consultivo de Fomento a la Sociedad Civil (CCFSC).
      </Hero>

      <section className="mx-auto max-w-4xl px-5 pt-16">
        <h2 className="mb-4 text-2xl font-bold text-navy">
          ¿Qué es el Consejo Consultivo de Fomento a la Sociedad Civil?
        </h2>
        <p className="mb-10 leading-relaxed text-navy/70">{CONSEJO_INTRO}</p>

        <h2 className="mb-4 text-2xl font-bold text-navy">Atribuciones</h2>
        <p className="mb-4 text-sm font-semibold text-navy/60">
          Artículo 38 de la Ley de Fomento a la Sociedad Civil Organizada para el Estado de
          Nuevo León:
        </p>
        <ol className="mb-4 list-decimal space-y-3 pl-5 text-navy/70">
          {CONSEJO_ATRIBUCIONES.map((texto) => (
            <li key={texto}>{texto}</li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="mb-8 text-2xl font-bold text-navy">Integrantes</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {CONSEJO_INTEGRANTES.map((persona) => (
            <div key={persona.nombre} className="flex gap-4">
              <Avatar nombre={persona.nombre} />
              <div>
                <h3 className="font-bold text-brand-orangeDark">{persona.nombre}</h3>
                <p className="text-sm text-navy/70">{persona.rol}</p>
                <p className="text-sm font-semibold text-navy">{persona.categoria}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl2 bg-brand-cream p-6">
          <p className="mb-4 text-sm text-navy/70">
            Tus aportaciones son fundamentales para fortalecer a la sociedad civil y contribuir
            a la mejora de las políticas públicas. Si tienes sugerencias, comentarios o
            requieres orientación, puedes escribir a{' '}
            <a href={`mailto:${CONSEJO_CONTACTO.correo}`} className="font-semibold text-brand-orangeDark">
              {CONSEJO_CONTACTO.correo}
            </a>
            , donde la C. {CONSEJO_CONTACTO.nombre}, responsable del Comité y del Consejo,
            brindará atención, seguimiento y acompañamiento correspondiente.
          </p>
          <div className="flex items-center gap-4">
            <Avatar nombre={CONSEJO_CONTACTO.nombre} />
            <div>
              <p className="font-bold text-brand-orangeDark">{CONSEJO_CONTACTO.nombre}</p>
              <p className="text-sm text-navy/70">{CONSEJO_CONTACTO.rol}</p>
              <p className="text-sm text-navy/70">{CONSEJO_CONTACTO.correo}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-20">
        <h2 className="mb-6 text-2xl font-bold text-navy">Informes Anuales</h2>
        <ul className="space-y-3">
          {ORGANOS_INFORMES.map((informe) => (
            <li key={informe.titulo}>
              <a
                href={informe.url}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-bold text-brand-orangeDark underline underline-offset-4"
              >
                {informe.titulo}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
