import { Link } from 'react-router-dom'
import TopicCard from '../components/TopicCard'

export default function Home() {
  return (
    <>
      <section className="bg-brand-orange px-5 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold tracking-wide opacity-80">Gobierno de Nuevo León</p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
            El portal de la Sociedad Civil Organizada de Nuevo León
          </h1>
          <p className="mt-5 max-w-xl text-lg opacity-90">
            Registro, apoyos, trámites y espacios de representación para las Organizaciones de
            la Sociedad Civil que trabajan por Nuevo León.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/registro" className="pill-btn-light">
              Regístrate
            </Link>
            <Link to="/programa-de-fomento/tramites" className="pill-btn border-2 border-white/60 bg-white text-brand-orange hover:bg-white/90">
              Consulta trámites
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="mb-2 text-3xl font-bold text-navy">Explora el portal</h2>
        <p className="mb-8 max-w-2xl text-navy/70">
          Todo lo que tu organización necesita para registrarse, acceder a apoyos y mantenerse
          informada, en un solo lugar.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TopicCard
            to="/registro"
            tone="pink"
            title="Registro"
            description="Registra tu organización o actualiza tus datos en el directorio estatal de OSC."
          />
          <TopicCard
            to="/programa-de-fomento"
            tone="orange"
            title="Programa de Fomento"
            description="Apoyos económicos para proyectos que mejoran la calidad de vida de personas en situación de vulnerabilidad."
          />
          <TopicCard
            to="/organos-de-representacion"
            tone="purple"
            title="Órganos de representación"
            description="Conoce el Consejo Consultivo y el Comité Técnico de Fomento a la Sociedad Civil."
          />
          <TopicCard
            to="/multimedia"
            tone="green"
            title="Multimedia"
            description="Contenido interactivo y recursos visuales sobre nuestros programas y actividades."
          />
          <TopicCard
            to="/programa-de-fomento/convocatorias-y-resultados"
            tone="blue"
            title="Convocatorias y resultados"
            description="Consulta las convocatorias abiertas y los resultados organizados por categoría y fecha."
          />
          <TopicCard
            to="/contacto"
            tone="yellow"
            title="Contáctanos"
            description="¿Dudas sobre tu registro o algún trámite? Escríbenos y te ayudamos."
          />
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-navy">¿Qué es el Programa de Fomento?</h2>
            <p className="mb-4 leading-relaxed text-navy/70">
              El Programa de Fomento fortalece a las Organizaciones de la Sociedad Civil mediante
              apoyos orientados al desarrollo de proyectos sociales con impacto positivo y
              sostenible en Nuevo León.
            </p>
            <p className="mb-6 leading-relaxed text-navy/70">
              Su objetivo es impulsar iniciativas que contribuyan al bienestar de personas y
              comunidades en situación de vulnerabilidad, además de fortalecer las capacidades
              institucionales de las organizaciones.
            </p>
            <Link to="/programa-de-fomento" className="pill-btn-dark">
              Conoce el programa
            </Link>
          </div>
          <div className="rounded-xl2 bg-brand-cream p-8">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-brand-orange" />
                <span className="text-navy/80">Colaboración entre gobierno, sociedad civil y comunidad.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-brand-pink" />
                <span className="text-navy/80">Apoyos económicos a proyectos con impacto social medible.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-brand-purple" />
                <span className="text-navy/80">Fortalecimiento institucional de las organizaciones registradas.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
