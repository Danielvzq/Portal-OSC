const TONES = {
  orange: 'bg-brand-orange text-white',
  pink: 'bg-brand-pink text-white',
  purple: 'bg-brand-purple text-white',
  green: 'bg-brand-green text-navy',
  blue: 'bg-brand-blue text-navy',
  yellow: 'bg-brand-yellow text-navy',
  navy: 'bg-navy text-white',
}

export default function Hero({ eyebrow, title, children, tone = 'orange', cta }) {
  return (
    <section className={`${TONES[tone]} px-5 py-16 sm:py-20`}>
      <div className="mx-auto max-w-5xl">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold tracking-wide opacity-80">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        {children && <p className="mt-5 max-w-2xl text-lg opacity-90">{children}</p>}
        {cta && (
          <a href={cta.href} target={cta.external ? '_blank' : undefined} rel="noreferrer" className="pill-btn-light mt-7">
            {cta.label}
          </a>
        )}
      </div>
    </section>
  )
}
