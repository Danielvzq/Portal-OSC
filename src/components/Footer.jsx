import { DOCUMENTOS, REDES } from '../data/documentos'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/90">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="mb-1 text-lg font-bold text-white">Documentos y marco legal</h2>
            <p className="mb-6 text-sm text-white/60">
              Reglas de operación, leyes y criterios vigentes del Programa de Fomento.
            </p>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {DOCUMENTOS.map((doc) => (
                <li key={doc.url}>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-white/85 underline decoration-brand-orange/60 decoration-2 underline-offset-4 hover:text-brand-orange"
                  >
                    {doc.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Secretaría de Igualdad e Inclusión</h2>
              <p className="text-sm text-white/60">Gobierno del Estado de Nuevo León</p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/50">
                Síguenos
              </h3>
              <div className="flex gap-2">
                {REDES.map((r) => (
                  <a
                    key={r.label}
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold hover:bg-brand-orange"
                    aria-label={r.label}
                  >
                    {r.label.slice(0, 2)}
                  </a>
                ))}
              </div>
              <p className="mt-3 text-sm text-white/60">@igualdadnl</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Gobierno de Nuevo León. Todos los derechos reservados.</span>
          <span>Portal no oficial en desarrollo · basado en el sitio público de OSC NL</span>
        </div>
      </div>
    </footer>
  )
}
