export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary/30">
      <div className="relative h-[340px] w-full md:h-[460px] lg:h-[520px]">
        {/* Logo esfumado ao fundo */}
        <img
          src="/images/ella-logo-preto.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 h-[130%] max-w-none -translate-y-1/2 opacity-40 md:right-8 lg:right-24"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
          <div className="max-w-lg">
            <h1 className="text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Elegância que você leva para casa
            </h1>
            <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">
              Cosméticos importados e chás solúveis Ekland. Curadoria exclusiva
              com até 30% de desconto.
            </p>
            <div className="mt-8">
              <a
                href="#cosmeticos"
                className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Comprar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
