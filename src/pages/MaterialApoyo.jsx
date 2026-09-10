import Hero from '../components/Hero'

export default function MaterialApoyo() {
  return (
    <>
      <Hero tone="blue" eyebrow="Multimedia" title="Material de Apoyo">
        Guías, infografías y recursos descargables para fortalecer a tu organización.
      </Hero>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="rounded-xl2 border border-black/5 bg-white p-8 shadow-sm">
          <p className="text-sm text-navy/70">
            Agrega aquí las guías e infografías de apoyo (por ejemplo, en formato PDF o imagen)
            que la Secretaría publique para las OSC.
          </p>
        </div>
      </section>
    </>
  )
}
