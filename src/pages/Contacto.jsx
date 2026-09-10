import { useState } from 'react'
import Hero from '../components/Hero'

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

      <section className="mx-auto grid max-w-5xl gap-10 px-5 py-16 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-bold text-navy">Datos de contacto</h2>
          <ul className="space-y-3 text-navy/70">
            <li>
              <span className="font-semibold text-navy">Secretaría de Igualdad e Inclusión</span>
              <br />
              Gobierno del Estado de Nuevo León
            </li>
            <li>Actualiza este bloque con la dirección, teléfono y correo oficiales vigentes.</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-xl2 border border-black/5 bg-white p-6 shadow-sm">
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
