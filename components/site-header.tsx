'use client'

import { Search, User, Heart, ShoppingBag } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { departments } from '@/lib/products'

export function SiteHeader() {
  const { totalItems, openCart } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 md:gap-8">
        {/* Logo */}
        <a href="#" className="shrink-0 leading-none" aria-label="Ella Importados - página inicial">
          <img
            src="/images/ella-logo-preto.png"
            alt="Ella Importados"
            className="h-14 w-auto md:h-16"
          />
        </a>

        {/* Busca */}
        <form
          className="relative hidden flex-1 md:block"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            placeholder="O que você está procurando?"
            aria-label="Buscar produtos"
            className="w-full rounded-full border border-border bg-secondary/40 py-2.5 pl-5 pr-12 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="submit"
            aria-label="Buscar"
            className="absolute right-1.5 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90"
          >
            <Search className="size-4" />
          </button>
        </form>

        {/* Ações */}
        <div className="flex items-center gap-1 md:gap-4">
          <a
            href="#"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-foreground transition hover:text-primary"
          >
            <User className="size-5" />
            <span className="hidden text-left leading-tight lg:block">
              <span className="block text-[11px] text-muted-foreground">Entre ou</span>
              <span className="block font-semibold">Cadastre-se</span>
            </span>
          </a>
          <a
            href="#"
            aria-label="Favoritos"
            className="hidden rounded-md p-2 text-foreground transition hover:text-primary sm:block"
          >
            <Heart className="size-5" />
          </a>
          <button
            type="button"
            onClick={openCart}
            aria-label="Abrir carrinho"
            className="relative rounded-md p-2 text-foreground transition hover:text-primary"
          >
            <ShoppingBag className="size-5" />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex size-4.5 min-w-4.5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Busca mobile */}
      <div className="border-t border-border px-4 py-2 md:hidden">
        <form className="relative" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="O que você está procurando?"
            aria-label="Buscar produtos"
            className="w-full rounded-full border border-border bg-secondary/40 py-2 pl-4 pr-10 text-sm outline-none focus:border-primary"
          />
          <Search className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        </form>
      </div>

      {/* Navegação de categorias */}
      <nav className="border-t border-border bg-background">
        <ul className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 py-2 text-sm font-medium">
          <li>
            <a
              href="#"
              className="whitespace-nowrap rounded-md px-3 py-1.5 font-semibold text-primary transition hover:bg-accent"
            >
              Ofertas
            </a>
          </li>
          {departments.map((dep) => (
            <li key={dep.id}>
              <a
                href={`#${dep.id}`}
                className="whitespace-nowrap rounded-md px-3 py-1.5 text-foreground transition hover:bg-accent hover:text-primary"
              >
                {dep.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="whitespace-nowrap rounded-md px-3 py-1.5 text-foreground transition hover:bg-accent hover:text-primary"
            >
              Novidades
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
