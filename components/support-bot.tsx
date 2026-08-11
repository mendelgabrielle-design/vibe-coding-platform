'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

const WHATSAPP_LINK = 'https://wa.me/555197211948'

type Message = {
  from: 'bot' | 'user'
  text: string
}

type QuickReply = {
  label: string
  keywords: string[]
  answer: string
}

// Respostas prontas da central de atendimento
const QUICK_REPLIES: QuickReply[] = [
  {
    label: 'Prazo de entrega',
    keywords: ['entrega', 'prazo', 'chega', 'correios', 'frete', 'demora', 'envio'],
    answer:
      'O prazo de entrega é de até 7 dias úteis e todos os pedidos são enviados pelos Correios. Assim que o pedido é postado, você recebe o código de rastreio.',
  },
  {
    label: 'Formas de pagamento',
    keywords: ['pagamento', 'pagar', 'pix', 'cartao', 'cartão', 'credito', 'crédito', 'debito', 'débito', 'parcel'],
    answer:
      'Aceitamos Pix, cartão de débito e cartão de crédito (com taxa da maquininha). O Pix é a forma mais rápida para liberar o seu pedido.',
  },
  {
    label: 'Trocas e devoluções',
    keywords: ['troca', 'trocar', 'devolucao', 'devolução', 'devolver', 'arrependimento', 'defeito'],
    answer:
      'Você pode solicitar troca ou devolução em até 7 dias após o recebimento. Fale com a gente pelo WhatsApp que resolvemos rapidinho para você.',
  },
  {
    label: 'Falar no WhatsApp',
    keywords: ['whatsapp', 'zap', 'contato', 'falar', 'atendente', 'humano', 'telefone', 'numero', 'número'],
    answer:
      'Nosso WhatsApp para atendimento é +55 51 9721-1948. Clique no botão abaixo para falar direto com a nossa equipe.',
  },
  {
    label: 'Instagram',
    keywords: ['instagram', 'insta', 'rede social', 'seguir'],
    answer:
      'Nos siga no Instagram @ella.importados para ver as novidades, lançamentos e promoções em primeira mão!',
  },
  {
    label: 'Produtos disponíveis',
    keywords: ['produto', 'produtos', 'cosmetico', 'cosmético', 'perfume', 'bazar', 'cha', 'chá', 'ekland', 'catalogo', 'catálogo', 'vende'],
    answer:
      'Trabalhamos com Cosméticos (perfumes importados) e chás solúveis Ekland (Multifruit, Limão, Frutas Vermelhas, Framboesa e Pêssego) a R$ 29,90 cada. Navegue pelo site para ver todo o catálogo com fotos e preços.',
  },
  {
    label: 'É seguro comprar?',
    keywords: ['seguro', 'confiavel', 'confiável', 'golpe', 'original', 'garantia'],
    answer:
      'Sim! A Ella Importados é uma loja de produtos importados originais, com pagamento protegido e atendimento humano pelo WhatsApp sempre que precisar.',
  },
]

const SAUDACAO =
  'Olá! Sou a assistente virtual da Ella Importados. Como posso te ajudar hoje? Escolha uma opção abaixo ou digite sua dúvida.'
const FALLBACK =
  'Não entendi muito bem sua dúvida. Você pode escolher uma das opções abaixo ou falar direto com a nossa equipe pelo WhatsApp +55 51 9721-1948.'

function findAnswer(input: string): string {
  const normalized = input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  for (const reply of QUICK_REPLIES) {
    if (reply.keywords.some((kw) => normalized.includes(kw.normalize('NFD').replace(/[\u0300-\u036f]/g, '')))) {
      return reply.answer
    }
  }
  return FALLBACK
}

export function SupportBot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([{ from: 'bot', text: SAUDACAO }])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open])

  function sendMessage(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    const answer = findAnswer(trimmed)
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: trimmed },
      { from: 'bot', text: answer },
    ])
    setInput('')
  }

  function handleQuickReply(reply: QuickReply) {
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: reply.label },
      { from: 'bot', text: reply.answer },
    ])
  }

  return (
    <>
      {/* Botão flutuante */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Fechar atendimento' : 'Abrir central de atendimento'}
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:opacity-90"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>

      {/* Janela do chat */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[30rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-xl border border-border bg-background shadow-2xl">
          {/* Cabeçalho */}
          <div className="flex items-center gap-3 border-b border-border bg-primary px-4 py-3 text-primary-foreground">
            <div className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/20">
              <MessageCircle className="size-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Central de Atendimento</p>
              <p className="text-xs opacity-90">Ella Importados • online</p>
            </div>
          </div>

          {/* Mensagens */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-secondary/20 p-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'rounded-br-sm bg-primary text-primary-foreground'
                      : 'rounded-bl-sm border border-border bg-background text-foreground'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Botão WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:opacity-90"
            >
              <MessageCircle className="size-4" />
              Falar no WhatsApp
            </a>

            {/* Respostas rápidas */}
            <div className="flex flex-wrap gap-2 pt-1">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply.label}
                  type="button"
                  onClick={() => handleQuickReply(reply)}
                  className="rounded-full border border-primary/40 bg-background px-3 py-1.5 text-xs font-medium text-primary transition hover:bg-accent"
                >
                  {reply.label}
                </button>
              ))}
            </div>
          </div>

          {/* Campo de entrada */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage(input)
            }}
            className="flex items-center gap-2 border-t border-border bg-background p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua dúvida..."
              aria-label="Digite sua mensagem"
              className="flex-1 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              aria-label="Enviar mensagem"
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
