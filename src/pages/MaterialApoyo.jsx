import Hero from '../components/Hero'
import { MARCO_NORMATIVO, TEORIA_DEL_CAMBIO } from '../data/documentos'

function DocIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export default function MaterialApoyo() {
  const disponibles = MARCO_NORMATIVO.filter((d) => d.url)
  const pendientes = MARCO_NORMATIVO.filter((d) => !d.url)

  return (
    <>
      <Hero tone="blue" eyebrow="Multimedia" title="Material de Apoyo">
        Marco normativo: leyes, reglamentos y planes que rigen al Programa de Fomento y a las
        Organizaciones de la Sociedad Civil en Nuevo León.
      </Hero>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="mb-6 text-2xl font-bold text-navy">Marco Normativo</h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {disponibles.map((doc) => (
            <a
              key={doc.titulo}
              href={doc.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-xl2 border border-black/5 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-blue">
                <DocIcon />
              </div>
              <p className="text-sm font-semibold leading-snug text-navy group-hover:text-brand-orangeDark">
                {doc.titulo}
              </p>
              <span className="mt-3 text-xs font-medium text-navy/50">Abrir documento →</span>
            </a>
          ))}
        </div>

        {pendientes.length > 0 && (
          <div className="mt-10 rounded-xl2 bg-brand-cream p-6">
            <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-navy/60">
              Pendientes de enlace público
            </h3>
            <p className="mb-3 text-sm text-navy/70">
              Estos documentos solo existen en el Drive interno del sitio original. Agrega su
              enlace en <code className="rounded bg-white px-1.5 py-0.5">src/data/documentos.js</code>{' '}
              (arreglo <code className="rounded bg-white px-1.5 py-0.5">MARCO_NORMATIVO</code>).
            </p>
            <ul className="list-inside list-disc space-y-1 text-sm text-navy/70">
              {pendientes.map((doc) => (
                <li key={doc.titulo}>{doc.titulo}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="mb-2 text-2xl font-bold text-navy">Teoría del Cambio</h2>
        <p className="mb-6 max-w-2xl text-sm text-navy/60">
          Recursos audiovisuales para entender la metodología de Teoría del Cambio aplicada al
          diseño de proyectos sociales.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEORIA_DEL_CAMBIO.map((video) => (
            <div key={video.id} className="overflow-hidden rounded-xl2 border border-black/5 bg-white shadow-sm">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-navy">{video.titulo}</p>
                <p className="text-xs text-navy/50">{video.canal}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
