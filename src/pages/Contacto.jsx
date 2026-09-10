import { useState } from 'react'
import Hero from '../components/Hero'
import { CONTACTO_INFO, CONTACTO_AYUDA, CONTACTO_VENTAJAS } from '../data/documentos'

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Conecta este formulario a tu backend, Google Form o servicio de correo preferido.
    setEnviado(true)
  }

  return (
    <>
      <Hero tone="blue" eyebrow="Gobierno de Nuevo León" title="Contáctanos">
        Si tienes alguna duda, comentario o deseas más información sobre nuestros programas y
        servicios, estamos para ayudarte.
      </Hero>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="mb-4 text-2xl font-bold text-navy">Conócenos</h2>
        <p className="mb-8 leading-relaxed text-navy/70">
          Te invitamos a conocer al equipo de colaboradores de la {CONTACTO_INFO.dependencia},
          quienes están disponibles para brindarte orientación y resolver tus dudas sobre los
          trámites y requisitos que necesites realizar.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 font-bold text-navy">¿Cómo pueden ayudarte?</h3>
            <ul className="list-inside list-disc space-y-2 text-navy/70">
              {CONTACTO_AYUDA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-navy">Ventajas de contactarlos</h3>
            <ul className="list-inside list-disc space-y-2 text-navy/70">
              {CONTACTO_VENTAJAS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-xl2 bg-brand-cream p-6">
          <p className="text-navy/80">
            Contáctanos al{' '}
            <a href={`tel:${CONTACTO_INFO.telefono.replace(/\D/g, '')}`} className="font-bold text-brand-orangeDark">
              {CONTACTO_INFO.telefono}
            </a>{' '}
            o bien a través del correo electrónico{' '}
            <a href={`mailto:${CONTACTO_INFO.correo}`} className="font-bold text-brand-orangeDark">
              {CONTACTO_INFO.correo}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16">
        <form onSubmit={handleSubmit} className="rounded-xl2 border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-navy">Envíanos un mensaje</h2>
          <div className="mb-4">
            <label className="mb-1 block text-sm font-semibold text-navy" htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              required
              className="w-full rounded-lg border border-navy/15 px-4 py-2.5 focus:border-brand-orange"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-sm font-semibold text-navy" htmlFor="correo">
              Correo electrónico
            </label>
            <input
              id="correo"
              type="email"
              required
              className="w-full rounded-lg border border-navy/15 px-4 py-2.5 focus:border-brand-orange"
            />
          </div>
          <div className="mb-5">
            <label className="mb-1 block text-sm font-semibold text-navy" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              rows={4}
              required
              className="w-full rounded-lg border border-navy/15 px-4 py-2.5 focus:border-brand-orange"
            />
          </div>
          <button type="submit" className="pill-btn-dark">
            Enviar mensaje
          </button>
          {enviado && (
            <p className="mt-3 text-sm font-medium text-brand-green">
              Mensaje enviado. Nos pondremos en contacto pronto.
            </p>
          )}
        </form>
      </section>
    </>
  )
}
