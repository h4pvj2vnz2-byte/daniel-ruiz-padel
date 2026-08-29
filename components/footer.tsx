'use client'

import { useSmoothScroll } from '@/lib/use-smooth-scroll'

export function Footer() {
  const { scrollToElement } = useSmoothScroll()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
    e.preventDefault()
    scrollToElement(elementId)
  }

  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-14">
        {/* Contenedor grid/flex para layout responsive */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo/Brand (izquierda) */}
          <a
            href="#top"
            onClick={(e) => handleClick(e, 'top')}
            className="flex items-center gap-2.5 transition-[color,opacity] duration-200 ease-out hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className="size-2.5 rounded-full bg-accent" aria-hidden="true" />
            <span className="font-mono text-sm tracking-tight text-foreground">
              Daniel Ruiz{' '}
              <span className="text-muted-foreground">· Padel</span>
            </span>
          </a>

          {/* Enlaces de navegación (centro en desktop, apilados en móvil) */}
          <ul className="flex flex-col items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:gap-6">
            <li>
              <a
                href="#sessions"
                onClick={(e) => handleClick(e, 'sessions')}
                className="transition-[color,opacity] duration-200 ease-out hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Sessions
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleClick(e, 'about')}
                className="transition-[color,opacity] duration-200 ease-out hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, 'contact')}
                className="transition-[color,opacity] duration-200 ease-out hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#book"
                onClick={(e) => handleClick(e, 'book')}
                className="transition-[color,opacity] duration-200 ease-out hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Book
              </a>
            </li>
          </ul>

          {/* Enlaces de redes (derecha en desktop, apilados en móvil) */}
          <ul className="flex flex-col items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:gap-6">
            <li>
              <a
                href="https://wa.me/60XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-[color,opacity] duration-200 ease-out hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/XXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-[color,opacity] duration-200 ease-out hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright abajo, pequeño y centrado */}
        <div className="mt-10 border-t border-line pt-6 text-center md:mt-12 md:pt-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
            © Night Court Padel · Kuala Lumpur
          </p>
        </div>
      </div>
    </footer>
  )
}
