'use client'

import { Star } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { formatPrice, type Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <div className="relative aspect-square overflow-hidden bg-secondary/20">
        {product.tag && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
            {product.tag}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute right-3 top-3 z-10 rounded-full bg-foreground px-2.5 py-1 text-[11px] font-bold text-background">
            -{discount}%
          </span>
        )}
        <img
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          className="size-full object-contain p-4 transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
          {product.brand}
        </p>
        <h3 className="mt-1 line-clamp-2 text-sm font-medium leading-snug text-foreground">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`size-3.5 ${
                  i < product.rating
                    ? 'fill-primary text-primary'
                    : 'fill-border text-border'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="mt-auto pt-3">
          {product.oldPrice && (
            <p className="text-xs text-muted-foreground line-through">
              {formatPrice(product.oldPrice)}
            </p>
          )}
          <p className="text-lg font-bold text-foreground">
            {formatPrice(product.price)}
          </p>
          {product.installments && (
            <p className="text-xs text-muted-foreground">{product.installments}</p>
          )}
          <button
            type="button"
            onClick={() => addItem(product)}
            className="mt-3 w-full rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Comprar
          </button>
        </div>
      </div>
    </article>
  )
}
