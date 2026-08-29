'use client'

import { useRef, useEffect, useState } from 'react'

// ============================================================
// COACH PORTRAIT
// Ruta de la foto: /public/coach.png (foto vertical retrato)
// ============================================================
const COACH_IMAGE_PATH = '/coach.png'

// Photo filters & styling
const COACH_BRIGHTNESS = '0.95' // Brightness muy leve (0-1)
const COACH_OVERLAY_OPACITY = '0.12' // Overlay navy tenue (10-15%)

// Animation config
const COACH_FADE_DURATION = '600ms' // Duración de entrada al scroll
const COACH_HOVER_SCALE = '1.03' // Zoom en hover
const COACH_HOVER_LIFT = '-4px' // Elevación en hover (translateY)
const COACH_HOVER_DURATION = '300ms' // Duración de transición hover

const CHIPS = [
  'PadelMBA certified',
  'Coached in Spain & Belgium',
  'All levels',
  'English · Spanish',
]

export function About() {
  const photoRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Scroll reveal: IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (photoRef.current) {
      observer.observe(photoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Detectar prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  return (
    <section id="about" className="w-full border-t border-white/6 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Two-column layout: foto arriba en móvil, foto a la derecha en desktop */}
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
          {/* FOTO: aparece primero visualmente en móvil (arriba), segundo en desktop (derecha) */}
          <div className="lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={photoRef}
              className={`relative w-full max-w-xs md:max-w-sm lg:max-w-[360px] overflow-hidden rounded-xl transition-transform ${
                !prefersReducedMotion
                  ? 'hover:scale-[1.03] hover:-translate-y-1 duration-300'
                  : ''
              } ${isVisible && !prefersReducedMotion ? 'reveal-fade-up' : ''}`}
              style={{
                animationDuration: isVisible && !prefersReducedMotion ? COACH_FADE_DURATION : undefined,
              }}
            >
              {/* Imagen nítida sin blur */}
              <img
                src={COACH_IMAGE_PATH}
                alt="Coach Daniel"
                className={`relative rounded-xl border border-white/8 object-cover w-full max-h-[500px] transition-transform ${
                  !prefersReducedMotion ? 'duration-300' : ''
                }`}
                style={{
                  brightness: COACH_BRIGHTNESS,
                  objectPosition: 'center',
                }}
              />
              {/* Overlay navy tenue para integrar con paleta night-court */}
              <div
                className="absolute inset-0 rounded-xl bg-background pointer-events-none"
                style={{
                  opacity: COACH_OVERLAY_OPACITY,
                }}
              />
            </div>
          </div>

          {/* TEXTO: aparece segundo visualmente en móvil (abajo), primero en desktop (izquierda) */}
          <div className="lg:order-1">
            <h2 className="font-display text-4xl uppercase leading-tight tracking-tight">
              Hi, I&apos;m Daniel.
            </h2>

            <div className="mt-10 space-y-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                I fell for padel in Europe and made it my job — coaching at Arenal
                Academy in Belgium and BPXsport in Spain before bringing it to Kuala
                Lumpur. I&apos;m PadelMBA certified, which really just means
                there&apos;s a method behind every session: each drill has a reason.
                What I care about is simple — you walk off court playing better
                than you walked on, and having fun doing it.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Away from coaching, I keep learning and growing in other sides of the game too. But on court, my focus is you — whatever your level, let&apos;s improve it together.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {CHIPS.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-line bg-background px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-foreground"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
