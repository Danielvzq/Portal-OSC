import Hero from '../components/Hero'

const PASOS = [
  {
    title: 'Reúne tu documentación',
    description:
      'Acta constitutiva, RFC y documentos que acrediten la representación legal de tu organización.',
  },
  {
    title: 'Completa el registro estatal',
    description:
      'Llena el formulario de preregistro con los datos generales, rubro y actividad principal de tu OSC.',
  },
  {
    title: 'Solicita tu acreditación',
    description:
      'Envía la solicitud de acreditación de actividades correspondiente al ciclo vigente.',
  },
  {
    title: 'Da seguimiento',
    description:
      'Consulta el estatus de tu trámite y mantén actualizados tus datos de contacto.',
  },
]

export default function Tramites() {
  return (
    <>
      <Hero tone="yellow" eyebrow="Programa de Fomento" title="Trámites">
        En este apartado encontrarás una guía paso a paso sobre los requisitos necesarios para
        registrar tu Organización de la Sociedad Civil, así como para realizar las solicitudes
        de acreditación de actividades.
      </Hero>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <ol className="space-y-6">
          {PASOS.map((paso, i) => (
            <li key={paso.title} className="flex gap-5 rounded-xl2 border border-black/5 bg-white p-6 shadow-sm">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-orange font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="mb-1 font-bold text-navy">{paso.title}</h3>
                <p className="text-sm text-navy/70">{paso.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-xl2 bg-brand-cream p-6">
          <p className="text-sm text-navy/70">
            Consulta la guía completa para el llenado de transparencia del SAT y las Reglas de
            Operación vigentes en la sección de documentos, al final de esta página.
          </p>
        </div>
      </section>
    </>
  )
}
