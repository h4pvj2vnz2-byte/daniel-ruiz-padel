export function Closing() {
  return (
    <section className="w-full border-t border-white/6 border-b border-white/8 bg-surface pt-20 md:pt-28 pb-16 md:pb-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-5 md:px-8">
        {/* Título grande centrado */}
        <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.9] tracking-tight text-balance text-center">
          Let&apos;s get you on court.
        </h2>

        {/* Subtítulo discreto centrado */}
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground text-center">
          Kuala Lumpur · Every level welcome.
        </p>
      </div>
    </section>
  )
}
