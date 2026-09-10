import { Link } from 'react-router-dom'

const BORDERS = {
  orange: 'border-brand-orange',
  pink: 'border-brand-pink',
  purple: 'border-brand-purple',
  green: 'border-brand-green',
  blue: 'border-brand-blue',
  yellow: 'border-brand-yellow',
}

export default function TopicCard({ to, tone = 'orange', title, description, external }) {
  const inner = (
    <div className={`h-full rounded-xl2 border-t-4 ${BORDERS[tone]} bg-white p-6 shadow-sm transition-shadow hover:shadow-md`}>
      <h3 className="mb-2 text-xl font-bold text-navy">{title}</h3>
      <p className="text-sm leading-relaxed text-navy/70">{description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-brand-orangeDark">
        Ver más →
      </span>
    </div>
  )

  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className="block h-full">
        {inner}
      </a>
    )
  }

  return (
    <Link to={to} className="block h-full">
      {inner}
    </Link>
  )
}
