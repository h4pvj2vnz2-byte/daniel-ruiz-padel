'use client'

import { useSmoothScroll } from '@/lib/use-smooth-scroll'

export function Nav() {
  const { scrollToElement } = useSmoothScroll()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
    e.preventDefault()
    scrollToElement(elementId)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Primary"
      >
        {/* Brand: lime dot + name */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, 'top')}
          className="flex items-center gap-2.5 transition-[color,opacity] duration-200 ease-out hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="size-2.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="font-mono text-sm tracking-tight text-foreground">
            Daniel Ruiz{' '}
            <span className="text-muted-foreground">· Padel</span>
          </span>
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex">
            <li>
              <a
                href="#sessions"
                onClick={(e) => handleNavClick(e, 'sessions')}
                className="transition-[color,opacity] duration-200 ease-out hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Sessions
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="transition-[color,opacity] duration-200 ease-out hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="transition-[color,opacity] duration-200 ease-out hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#book"
            onClick={(e) => handleNavClick(e, 'book')}
            className="rounded-full bg-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-accent-foreground transition-[color,background-color,opacity,transform] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Book a session
          </a>
        </div>
      </nav>
    </header>
  )
}
