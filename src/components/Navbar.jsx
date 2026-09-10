import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV } from '../data/nav'

function ShieldMark() {
  return <img src="/logo-nl.png" alt="Escudo Nuevo León" className="h-9 w-9 object-contain" />
}

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5">
      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Navbar() {
  const [openIdx, setOpenIdx] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-4 border-brand-orange bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <ShieldMark />
          <span className="font-display text-xl font-bold text-navy">OSC NL</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item, idx) => (
            <li
              key={item.path}
              className="relative"
              onMouseEnter={() => item.children && setOpenIdx(idx)}
              onMouseLeave={() => item.children && setOpenIdx(null)}
            >
              {item.children ? (
                <button
                  className="flex items-center gap-1 rounded-lg px-3 py-2 font-semibold text-navy hover:bg-brand-cream"
                  aria-expanded={openIdx === idx}
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  {item.label}
                  <Chevron />
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 font-semibold hover:bg-brand-cream ${
                      isActive ? 'text-brand-orange' : 'text-navy'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )}

              {item.children && openIdx === idx && (
                <ul className="absolute left-0 top-full min-w-[260px] rounded-xl border border-black/5 bg-white p-2 shadow-xl">
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <NavLink
                        to={child.path}
                        className={({ isActive }) =>
                          `block rounded-lg px-3 py-2 font-medium hover:bg-brand-cream ${
                            isActive ? 'text-brand-orange' : 'text-navy'
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="#12172B" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-black/5 bg-white px-5 pb-4 lg:hidden">
          {NAV.map((item) => (
            <div key={item.path} className="py-1">
              <NavLink
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-2 py-2 font-semibold text-navy"
              >
                {item.label}
              </NavLink>
              {item.children && (
                <div className="ml-3 border-l-2 border-brand-orange/30 pl-3">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-2 py-1.5 text-sm text-navy/80"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
