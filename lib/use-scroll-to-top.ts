import { useEffect } from 'react'

export function useScrollToTop() {
  useEffect(() => {
    // Desactiva la restauración automática de scroll del navegador
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Fuerza scroll a la parte superior al montar el componente
    window.scrollTo(0, 0)
  }, [])
}
