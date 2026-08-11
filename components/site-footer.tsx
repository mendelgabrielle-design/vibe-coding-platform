import { Camera as Instagram, MessageCircle, Truck, Lock } from 'lucide-react'

const WHATSAPP_NUMERO = '+55 51 9721-1948'
const WHATSAPP_LINK = 'https://wa.me/555197211948'
const INSTAGRAM_LINK = 'https://instagram.com/ella.importados'

const columns = [
  {
    title: 'Institucional',
    links: ['Sobre a Ella'],
  },
  {
    title: 'Ajuda',
    links: ['Central de atendimento', 'Trocas e devoluções', 'Prazos de entrega', 'Formas de pagamento'],
  },
  {
    title: 'Cosméticos',
    links: ['Perfumes', 'Cuidados com a pele', 'Maquiagem'],
  },
  {
    title: 'Bazar',
    links: ['Chás'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-6">
        <div className="col-span-2">
          <img
            src="/images/ella-logo-preto.png"
            alt="Ella Importados"
            className="h-20 w-auto"
          />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Sua loja de produtos importados com curadoria exclusiva. Elegância,
            conforto e qualidade em cada detalhe.
          </p>

          {/* Contato */}
          <div className="mt-5 space-y-2 text-sm">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-foreground transition hover:text-primary"
            >
              <MessageCircle className="size-4 text-primary" />
              WhatsApp: {WHATSAPP_NUMERO}
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-foreground transition hover:text-primary"
            >
              <Instagram className="size-4 text-primary" />
              @ella.importados
            </a>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Truck className="size-4 text-primary" />
              Entrega em até 7 dias pelos Correios
            </p>
          </div>

          <div className="mt-5 flex gap-3">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Ella Importados"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Ella Importados"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Formas de pagamento */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm md:flex-row md:items-center md:gap-6">
          <span className="font-semibold uppercase tracking-wider text-foreground">
            Formas de pagamento
          </span>
          <div className="flex flex-wrap gap-2">
            {['Pix', 'Cartão de débito', 'Cartão de crédito (com taxa da maquininha)'].map((forma) => (
              <span
                key={forma}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
              >
                {forma}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-muted-foreground md:flex-row md:text-left">
          <p>© 2026 Ella Importados. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Lock className="size-3.5 text-primary" /> Site seguro
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
