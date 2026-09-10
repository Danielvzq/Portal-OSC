import Hero from '../components/Hero'
import { VIDEOS_OSC } from '../data/documentos'

function VideoOrPlaceholder({ driveId, titulo }) {
  if (driveId) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://drive.google.com/file/d/${driveId}/preview`}
        title={titulo}
        allow="autoplay"
        allowFullScreen
      />
    )
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-navy/90 px-4 text-center text-white/70">
      <span className="text-3xl">▶</span>
      <span className="text-xs">
        Falta el link de Drive — agrégalo en <code>src/data/documentos.js</code>
      </span>
    </div>
  )
}

export default function VideosOSC() {
  return (
    <>
      <Hero tone="orange" eyebrow="Multimedia" title="Videos OSC">
        Conoce el impacto de las OSC's. Descubre el impacto positivo de las organizaciones de
        la sociedad civil en nuestro estado — historias reales del trabajo comprometido y
        transformador de múltiples OSC.
      </Hero>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="space-y-14">
          {VIDEOS_OSC.map((video, i) => (
            <article
              key={video.organizacion}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="aspect-video w-full overflow-hidden rounded-xl2 shadow-sm">
                <VideoOrPlaceholder driveId={video.driveId} titulo={video.organizacion} />
              </div>
              <div>
                <h2 className="mb-3 text-xl font-bold text-navy">{video.organizacion}</h2>
                <p className="leading-relaxed text-navy/70">{video.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
