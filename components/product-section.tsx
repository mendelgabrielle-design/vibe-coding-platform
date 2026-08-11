import { ProductCard } from '@/components/product-card'
import type { Product } from '@/lib/products'

type Props = {
  id?: string
  title: string
  subtitle?: string
  products: Product[]
}

export function ProductSection({ id, title, subtitle, products }: Props) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-32 px-4 py-10 md:py-14">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          )}
          <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
        </div>
        <a
          href="#"
          className="hidden shrink-0 text-sm font-semibold text-primary hover:underline sm:block"
        >
          Ver todos
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
