import { Truck, CreditCard, ShieldCheck } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-4 py-2 text-center text-xs font-medium tracking-wide">
        <span className="flex items-center gap-1.5">
          <Truck className="size-3.5 text-primary" />
          Frete grátis acima de R$ 199
        </span>
        <span className="flex items-center gap-1.5">
          <CreditCard className="size-3.5 text-primary" />
          Até 10x sem juros
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="size-3.5 text-primary" />
          Produtos importados originais
        </span>
      </div>
    </div>
  )
}
