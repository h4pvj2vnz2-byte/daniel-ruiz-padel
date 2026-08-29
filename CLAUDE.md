@AGENTS.md

# Reglas del proyecto

Web personal de un coach de pádel en Kuala Lumpur (KL). Proyecto de una sola persona (el coach), sin multi-tenant ni backend complejo.

## Stack
- Next.js + Tailwind CSS + shadcn/ui.
- Mobile-first siempre: diseña y prueba primero en viewport móvil, luego escala a desktop.

## Colores de marca
- Fondo: `#0B1220`
- Acento (lima): `#C6FF3A`
- Usa estos colores como tokens/variables (Tailwind theme o CSS vars), no hardcodeados repetidos por todo el código.

## Reglas de UI críticas
- El titular (H1) del hero **nunca** debe desbordar ni cortarse en móvil. Usa `text-balance`/`text-wrap`, tamaños de fuente responsive (`clamp()` o clases `text-*` por breakpoint) y prueba en anchos pequeños (320–375px) antes de dar por válido cualquier cambio en el hero.

## Componentes
- Mantén los componentes pequeños, enfocados en una sola responsabilidad y fáciles de editar por alguien no técnico (el propio coach podría pedir cambios de texto/imágenes).
- Evita abstracciones innecesarias; prioriza claridad sobre reutilización prematura.
