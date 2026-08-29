import { BookingWidget } from '@/components/booking-widget'

export function Book() {
  return (
    <section id="book" className="w-full border-t border-white/6 bg-background py-20 md:py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 md:px-8">
        {/* Título y subtítulo centrados, compactos */}
        <div className="text-center">
          <h2 className="font-display text-[clamp(1.75rem,7vw,3.5rem)] uppercase leading-tight tracking-tight text-balance">
            Book a session
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Live availability · Pay online or at the court
          </p>
        </div>

        {/* Contenedor con altura flexible para la caja de widget */}
        {/* ============================================================
            BOOKING WIDGET EMBED
            SimplyBook widget se carga dinámicamente en el contenedor.
            El iframe ocupa 100% del ancho y altura disponibles.
            Centrado con márgenes automáticos y enmarcado limpio.
           ============================================================ */}
        <div className="mt-8 flex w-full flex-col items-center">
          <div
            id="booking-widget"
            className="w-full max-w-[900px] rounded-xl border border-line/40 bg-surface p-3 md:p-4"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'min(720px, 85vh)',
              minHeight: '600px',
              overflow: 'hidden',
              overflowY: 'auto',
            }}
          >
            {/* Widget se carga aquí via SimplyBook script */}
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  )
}
