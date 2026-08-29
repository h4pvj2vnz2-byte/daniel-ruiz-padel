'use client'

import { useSmoothScroll } from '@/lib/use-smooth-scroll'

export function Contact() {
  const { scrollToElement } = useSmoothScroll()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
    e.preventDefault()
    scrollToElement(elementId)
  }
  return (
    <section id="contact" className="w-full border-t border-white/6 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="font-display text-4xl uppercase leading-tight tracking-tight">
          Get in touch.
        </h2>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-2xl">
          Questions, or want to book a session? Message me — I&apos;ll get back to you.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://wa.me/60XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-accent-foreground transition-[color,background-color,opacity,transform] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            WhatsApp me
          </a>
          <a
            href="https://instagram.com/XXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground transition-[color,background-color,opacity,transform] duration-200 ease-out hover:bg-surface hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
