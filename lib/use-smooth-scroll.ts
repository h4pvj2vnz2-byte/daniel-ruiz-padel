export function useSmoothScroll() {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (!element) return

    // Detecta si el usuario prefiere movimiento reducido
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    element.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return { scrollToElement }
}
