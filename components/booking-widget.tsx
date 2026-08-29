'use client'

import { useEffect, useRef } from 'react'

export function BookingWidget() {
  const widgetInitialized = useRef(false)

  useEffect(() => {
    // Prevenir inicialización múltiple en desarrollo
    if (widgetInitialized.current) {
      return
    }

    // Cargar el script de SimplyBook dinámicamente
    const loadWidget = () => {
      // Verificar si el script ya está cargado en el DOM
      if (document.getElementById('simplybook-widget-script')) {
        initializeWidget()
        return
      }

      // Crear el script elemento
      const script = document.createElement('script')
      script.id = 'simplybook-widget-script'
      script.src = 'https://widget.simplybook.me/v2/widget/widget.js'
      script.type = 'text/javascript'
      script.async = true

      // Cuando el script carga, inicializar el widget
      script.onload = () => {
        initializeWidget()
      }

      // Manejar errores
      script.onerror = () => {
        console.error('Failed to load SimplyBook widget script')
      }

      // Agregar el script al body
      document.body.appendChild(script)
    }

    // Inicializar el widget con la configuración night-court limpia
    const initializeWidget = () => {
      if (typeof (window as any).SimplybookWidget !== 'undefined' && !widgetInitialized.current) {
        widgetInitialized.current = true

        new (window as any).SimplybookWidget({
          widget_type: 'iframe',
          url: 'https://daniruizpadel.simplybook.me',
          theme: 'minimal',
          theme_settings: {
            timeline_hide_unavailable: '1',
            hide_past_days: '0',
            timeline_show_end_time: '0',
            timeline_modern_display: 'as_slots',
            nav_bg_color: '#EDEFF3',
            sb_base_color: '#0B1220',
            display_item_mode: 'block',
            body_bg_color: '#EDEFF3',
            sb_review_image: '',
            dark_font_color: '#0B1220',
            light_font_color: '#0B1220',
            btn_color_1: '#0B1220',
            sb_company_label_color: '#0B1220',
            hide_img_mode: '1',
            show_sidebar: '1',
            sb_busy: '#c7ccd6',
            sb_available: '#C6FF3A',
          },
          timeline: 'modern',
          datepicker: 'top_calendar',
          is_rtl: false,
          container_id: 'booking-widget',
          app_config: { clear_session: 0, allow_switch_to_ada: 0, predefined: [] },
        })
      }
    }

    // Esperar a que el DOM esté listo y luego cargar el widget
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadWidget)
      return () => {
        document.removeEventListener('DOMContentLoaded', loadWidget)
      }
    } else {
      loadWidget()
    }
  }, [])

  return null
}
