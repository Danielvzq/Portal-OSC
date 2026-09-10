import { useState } from 'react'

export default function Accordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)

  return (
    <div className="divide-y divide-black/5 rounded-xl2 border border-black/5 bg-white shadow-sm">
      {items.map((section, idx) => {
        const isOpen = openIndex === idx
        return (
          <div key={section.anio}>
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left font-bold text-navy"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
            >
              {section.anio}
              <span className={`transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
            </button>
            {isOpen && (
              <ul className="space-y-2 px-5 pb-5">
                {section.items.map((item) => (
                  <li key={item.titulo}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-brand-orangeDark underline decoration-brand-orange/40 underline-offset-4 hover:text-navy"
                    >
                      {item.titulo}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  )
}
