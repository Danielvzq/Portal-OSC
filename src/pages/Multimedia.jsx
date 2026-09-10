import Hero from '../components/Hero'
import TopicCard from '../components/TopicCard'

export default function Multimedia() {
  return (
    <>
      <Hero tone="green" eyebrow="Gobierno de Nuevo León" title="Multimedia">
        Explora una experiencia interactiva a través de nuestro contenido multimedia. Accede a
        recursos diseñados para informarte de manera clara, dinámica y accesible. Mantente al
        día con las novedades de nuestra institución mediante contenidos visuales y atractivos
        que acercan la información a la ciudadanía.
      </Hero>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          <TopicCard
            to="/multimedia/material-de-apoyo"
            tone="blue"
            title="Material de Apoyo"
            description="Guías, infografías y recursos descargables para las Organizaciones de la Sociedad Civil."
          />
          <TopicCard
            to="/multimedia/videos-oscs"
            tone="purple"
            title="Videos OSC's"
            description="Videos con testimonios y buenas prácticas de organizaciones de la sociedad civil."
          />
        </div>
      </section>
    </>
  )
}
