import Hero from '../components/Hero'
import { VIDEOS_OSC } from '../data/documentos'

export default function VideosOSC() {
  return (
    <>
      <Hero tone="purple" eyebrow="Multimedia" title="Videos OSC's">
        Testimonios y buenas prácticas de organizaciones de la sociedad civil de Nuevo León.
      </Hero>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {VIDEOS_OSC.map((video) => (
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
              <p className="p-4 text-sm font-medium text-navy/70">{video.titulo}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
