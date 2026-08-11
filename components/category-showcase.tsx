import { categories } from '@/lib/products'

const items = categories

export function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <div className="mb-6 text-center">
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          Compre por categoria
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group relative flex flex-col items-center overflow-hidden rounded-lg border border-border bg-card p-6 text-center transition hover:border-primary hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex size-28 items-center justify-center rounded-full bg-secondary/40 transition group-hover:bg-accent">
              <img
                src={item.image || '/placeholder.svg'}
                alt={item.label}
                className="size-24 object-contain transition duration-300 group-hover:scale-110"
              />
            </div>
            <span className="mt-4 font-serif text-lg font-semibold text-foreground">
              {item.label}
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-wider text-primary">
              Ver produtos
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
