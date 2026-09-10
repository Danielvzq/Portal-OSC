import Hero from '../components/Hero'

export default function VideosOSC() {
  return (
    <>
      <Hero tone="purple" eyebrow="Multimedia" title="Videos OSC's">
        Testimonios y buenas prácticas de organizaciones de la sociedad civil de Nuevo León.
      </Hero>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="rounded-xl2 border border-black/5 bg-white p-8 shadow-sm">
          <p className="text-sm text-navy/70">
            Incrusta aquí los videos de YouTube de las OSC (usando su ID de video) cuando estén
            disponibles.
          </p>
        </div>
      </section>
    </>
  )
}
