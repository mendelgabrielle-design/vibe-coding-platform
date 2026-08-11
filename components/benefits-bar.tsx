import { Truck, RefreshCw, Lock, Headphones } from 'lucide-react'

const benefits = [
  { icon: Truck, title: 'Frete grátis', text: 'Nas compras acima de R$ 199' },
  { icon: RefreshCw, title: 'Troca fácil', text: 'Até 30 dias para trocar' },
  { icon: Lock, title: 'Compra segura', text: 'Ambiente 100% protegido' },
  { icon: Headphones, title: 'Atendimento', text: 'Suporte todos os dias' },
]

export function BenefitsBar() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 md:grid-cols-4">
        {benefits.map((b) => (
          <div key={b.title} className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <b.icon className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-foreground">{b.title}</p>
              <p className="text-xs text-muted-foreground">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
