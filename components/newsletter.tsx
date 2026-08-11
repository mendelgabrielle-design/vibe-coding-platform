'use client'

import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <section className="bg-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-4">
          <span className="hidden size-14 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary md:flex">
            <Mail className="size-6" />
          </span>
          <div>
            <h2 className="font-serif text-2xl font-bold text-background">
              Ganhe 10% na primeira compra
            </h2>
            <p className="mt-1 text-sm text-background/70">
              Assine nossa newsletter e receba ofertas exclusivas em primeira mão.
            </p>
          </div>
        </div>
        <form
          className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault()
            if (email) setSent(true)
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            aria-label="E-mail"
            className="flex-1 rounded-full border border-background/20 bg-background/10 px-5 py-3 text-sm text-background placeholder:text-background/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/40"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            {sent ? (
              <>
                <Check className="size-4" /> Inscrito!
              </>
            ) : (
              'Assinar'
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
