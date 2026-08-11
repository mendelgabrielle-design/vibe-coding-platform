export function AboutSection() {
  return (
    <section id="sobre" className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <div className="flex items-center justify-center rounded-md bg-background p-8 shadow-sm ring-1 ring-primary/20 md:p-12">
          <img
            src="/images/ella-logo-dourado.png"
            alt="Logo Ella Importados"
            className="w-full max-w-xs"
          />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Quem somos
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Sobre a Ella Importados
          </h2>
          <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              A Ella Importados nasceu com o propósito de reunir beleza, praticidade e
              variedade em um só lugar. Nossa loja oferece uma seleção especial de
              cosméticos, perfumaria e produtos para o uso do dia a dia, pensados para
              atender diferentes estilos, necessidades e momentos.
            </p>
            <p>
              Mais do que uma loja, a Ella Importados busca proporcionar uma experiência
              de compra completa, com produtos selecionados, variedade e dedicação em cada
              detalhe. Um espaço onde você encontra tudo o que precisa, com qualidade,
              praticidade e charme.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
