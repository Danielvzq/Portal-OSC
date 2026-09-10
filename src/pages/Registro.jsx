import { useMemo, useState } from 'react'
import Hero from '../components/Hero'
import { DIRECTORIO_MUESTRA } from '../data/documentos'

const REGISTRO_NUEVO_URL = 'https://drive.google.com/file/d/1SUll5aK9j7rvZIBsOIfizrnthM3De_b_/view'
const ACTUALIZAR_DATOS_URL = 'https://docs.google.com/forms/d/1C1yJF6HElhnlopC4dAIW47SQK3JmeodLc9b2fOxi894/edit'
const DIRECTORIO_XLSX =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vS1TydPrHlnpb8vzODyXyitTkRmqSFQdKZ51pNSMKeTp3ZbwN1JQ9QTyt0IlbL197Sc00Dg2tVPHhIw/pub?output=xlsx'

export default function Registro() {
  const [query, setQuery] = useState('')

  const resultados = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return DIRECTORIO_MUESTRA
    return DIRECTORIO_MUESTRA.filter((row) =>
      [row.organizacion, row.rubro, row.municipio].some((v) => v.toLowerCase().includes(q)),
    )
  }, [query])

  return (
    <>
      <Hero tone="pink" eyebrow="Sociedad Civil Organizada" title="Registro">
        Únete al portal de Organizaciones de la Sociedad Civil y accede a información,
        oportunidades de colaboración, recursos y herramientas de apoyo.
      </Hero>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:grid-cols-3">
        <div className="rounded-xl2 border-t-4 border-brand-pink bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-bold text-navy">Regístrate</h2>
          <p className="mb-4 text-sm text-navy/70">
            Registra tu organización y amplía su alcance para generar alianzas estratégicas.
          </p>
          <a href={REGISTRO_NUEVO_URL} target="_blank" rel="noreferrer" className="pill-btn-dark text-sm">
            Ir al formulario
          </a>
        </div>

        <div className="rounded-xl2 border-t-4 border-brand-blue bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-bold text-navy">Actualiza tus datos</h2>
          <p className="mb-4 text-sm text-navy/70">
            Si ya cuentas con registro, mantén tu información completa y vigente.
          </p>
          <a href={ACTUALIZAR_DATOS_URL} target="_blank" rel="noreferrer" className="pill-btn-dark text-sm">
            Actualizar datos
          </a>
        </div>

        <div className="rounded-xl2 border-t-4 border-brand-yellow bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-bold text-navy">Descarga el directorio</h2>
          <p className="mb-4 text-sm text-navy/70">
            Consulta labor, áreas de atención y contacto de las OSC registradas.
          </p>
          <a href={DIRECTORIO_XLSX} target="_blank" rel="noreferrer" className="pill-btn-dark text-sm">
            Descargar (.xlsx)
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-navy">Consulta el registro (directorio)</h2>
            <p className="text-sm text-navy/60">
              Muestra de {DIRECTORIO_MUESTRA.length} organizaciones — descarga el directorio
              completo para ver el listado total.
            </p>
          </div>
          <input
            type="search"
            placeholder="Buscar por organización, rubro o municipio…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-navy/15 px-5 py-2.5 text-sm shadow-sm focus:border-brand-orange sm:w-80"
          />
        </div>

        <div className="overflow-x-auto rounded-xl2 border border-black/5 bg-white shadow-sm">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Organización</th>
                <th className="px-4 py-3 font-semibold">Rubro</th>
                <th className="px-4 py-3 font-semibold">Municipio</th>
                <th className="px-4 py-3 font-semibold">Contacto</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((row) => (
                <tr key={row.organizacion} className="border-t border-black/5 odd:bg-brand-cream/60">
                  <td className="px-4 py-3 font-medium text-navy">{row.organizacion}</td>
                  <td className="px-4 py-3 text-navy/70">{row.rubro}</td>
                  <td className="px-4 py-3 text-navy/70">{row.municipio}</td>
                  <td className="px-4 py-3 text-navy/70">
                    <div>{row.correo}</div>
                    <div className="text-navy/50">{row.telefono}</div>
                  </td>
                </tr>
              ))}
              {resultados.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-navy/50">
                    Sin resultados para "{query}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
