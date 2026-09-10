import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-start px-5 py-24">
      <h1 className="mb-3 text-4xl font-extrabold text-navy">Página no encontrada</h1>
      <p className="mb-6 text-navy/70">La página que buscas no existe o fue movida.</p>
      <Link to="/" className="pill-btn-dark">
        Volver al inicio
      </Link>
    </section>
  )
}
