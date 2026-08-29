'use client'

import { useSmoothScroll } from '@/lib/use-smooth-scroll'

const SESSIONS = [
  {
    name: 'Private & small group',
    meta: '1–3 players · per hour',
    price: 'RM 300/hour',
    body: 'Just you, or up to three. Full focus — technique, tactics, match play. Flat rate for 1 to 3 players.',
    featured: false,
    isContact: false,
  },
  {
    name: 'Group',
    meta: '4 players · 1.5h',
    price: 'RM 115/player',
    body: 'Four on court, real rally time — 90 minutes. Minimum 4 to run.',
    featured: true,
    spots: '4 / 4 spots',
    isContact: false,
  },
  {
    name: 'Clinics & events',
    meta: 'on request',
    body: 'Running a clinic, a company day or a one-off? Tell me what you\'re after.',
    featured: false,
    isContact: true,
  },
]

export function Sessions() {
  const { scrollToElement } = useSmoothScroll()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
    e.preventDefault()
    scrollToElement(elementId)
  }

  return (
    <section id="sessions" className="w-full border-t border-white/6 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Sessions — Choose Your Format
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SESSIONS.map((s) => (
            <div
              key={s.name}
              className={[
                'group relative flex flex-col rounded-xl border p-6 transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-1 hover:border-accent/60',
                s.featured
                  ? 'border-accent bg-surface'
                  : 'border-line bg-surface',
              ].join(' ')}
            >
              {s.featured && (
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                    Most popular
                  </span>
                  <span className="rounded-full border border-accent/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                    {s.spots}
                  </span>
                </div>
              )}

              <span className="font-mono text-xs text-muted-foreground">
                {s.meta}
              </span>
              <h3 className="mt-2 font-display text-2xl uppercase leading-none tracking-tight">
                {s.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              {s.isContact ? (
                <a
                  href="#contact"
                  onClick={(e) => handleClick(e, 'contact')}
                  className="mt-5 rounded-full border border-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-accent transition-[color,background-color,opacity,transform] duration-200 ease-out hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent text-center"
                >
                  Get in touch
                </a>
              ) : (
                <p className="mt-5 font-mono text-sm font-bold text-accent">
                  {s.price}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
