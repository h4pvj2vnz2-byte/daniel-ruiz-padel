'use client'

import { useSmoothScroll } from '@/lib/use-smooth-scroll'

// ============================================================
// HERO BACKGROUND IMAGE
// Ruta de la foto: /public/hero/1.png (foto horizontal del jugador con saque)
// ============================================================
const HERO_IMAGE_PATH = '/hero/1.png'

// Image filters
const HERO_BLUR = '3px' // Blur suave de la imagen de fondo (2-4px)
const HERO_BRIGHTNESS = '0.55' // Oscurecimiento de la imagen (0-1)

// Overlay: gradiente de izquierda (más oscuro) a derecha (más claro)
const HERO_OVERLAY_OPACITY_LEFT = 0.85 // Intensidad máxima en la izquierda
const HERO_OVERLAY_OPACITY_RIGHT = 0.30 // Intensidad en la derecha

export function Hero() {
  const { scrollToElement } = useSmoothScroll()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
    e.preventDefault()
    scrollToElement(elementId)
  }
  return (
    <section
      id="top"
      className="relative min-h-svh w-full overflow-hidden bg-background pt-16"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={HERO_IMAGE_PATH}
          alt=""
          className="absolute inset-0 size-full object-cover"
          style={{
            objectPosition: 'center 30%', // Móvil: prioriza la figura (más arriba)
            filter: `blur(${HERO_BLUR}) brightness(${HERO_BRIGHTNESS})`,
          }}
        />
        {/* Responsive object-position para desktop */}
        <style>{`
          @media (min-width: 1024px) {
            [style*="object-position"] {
              object-position: center 20% !important;
            }
          }
        `}</style>

        {/* Dark left-to-right gradient overlay: más oscuro a la izquierda */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20"
          style={{
            opacity: HERO_OVERLAY_OPACITY_LEFT,
          }}
        />

        {/* Top-to-bottom gradient para contraste adicional del texto */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
          style={{
            opacity: HERO_OVERLAY_OPACITY_LEFT * 0.6,
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-5 py-14 md:px-8 lg:py-20">
        <div className="w-full max-w-2xl animate-fade-up text-center lg:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Padel Coach · Kuala Lumpur
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,9vw,5.5rem)] uppercase leading-[0.9] tracking-tight text-balance">
            Your next match starts here.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
            I&apos;m Daniel, a padel coach in KL. Sessions built around your game — book a slot and I&apos;ll see you on court.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start">
            <a
              href="#book"
              onClick={(e) => handleClick(e, 'book')}
              className="rounded-full bg-accent px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-accent-foreground transition-[color,background-color,opacity,transform] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Book a session
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
