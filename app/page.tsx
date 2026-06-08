"use client"

import Image from "next/image"
import Link from "next/link"

const WHATSAPP_NUMBER = "5551994099184"
const WHATSAPP_MESSAGE = encodeURIComponent("🌙 Olá! Cheguei através do site Lumina e gostaria de agendar minha consulta espiritual. Aguardo seu retorno. ✨🔮")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function LuminaPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-red-900/20">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-red-500 font-bold text-xl tracking-wider">LUMINA</span>
          <div className="flex gap-6 text-sm">
            <Link href="#sobre" className="text-gray-300 hover:text-red-400 transition-colors">
              Sobre
            </Link>
            <Link href="#servicos" className="text-gray-300 hover:text-red-400 transition-colors">
              Serviços
            </Link>
            <Link href="#contato" className="text-gray-300 hover:text-red-400 transition-colors">
              Contato
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 flex flex-col items-center justify-center text-center px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/images/logo-lumina.jpg"
              alt="LUMINA - A luz que guia sua essência"
              width={180}
              height={180}
              className="mx-auto"
              priority
            />
          </div>
          
          {/* Tagline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">A luz que guia</span>
            <br />
            <span className="text-red-500">a sua essência</span>
          </h1>
          
          {/* CTA Button */}
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-red-900/30"
          >
            Agendar sua Consulta
          </Link>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            <span className="text-white">Sobre </span>
            <span className="text-red-500">Patrícia Porciuncula</span>
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-10"></div>
          
          {/* Patricia Photo */}
          <div className="flex justify-center mb-10">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-red-600 shadow-xl shadow-red-900/30">
              <Image
                src="/images/patricia.jpg"
                alt="Patrícia Porciuncula"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          
          {/* Bio Card */}
          <div className="bg-[#141414] rounded-2xl p-6 md:p-8 border border-red-900/20">
            <p className="text-gray-300 mb-4 leading-relaxed">
              Patrícia Porciuncula descobriu sua mediunidade ainda na infância. Aos 18 anos, uma visão transformou sua caminhada espiritual.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Aos 38, iniciou sua trajetória na Umbanda, permanecendo 7 anos em aprendizado espiritual.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hoje segue sua missão espiritual na linha de <span className="text-red-400 font-medium">Maria Padilha das Almas</span>, realizando leituras e trabalhos espirituais.
            </p>
            
            {/* Features */}
            <div className="space-y-4 pt-4 border-t border-red-900/20">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔮</span>
                <p className="text-gray-400">
                  Atendimento on-line, realizado com discrição, sensibilidade e conexão espiritual.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💌</span>
                <p className="text-gray-400">
                  Leituras enviadas através de fotos e áudios personalizados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Image Section */}
      <section className="w-full">
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <Image
            src="/images/cartas.jpg"
            alt="Mesa de leitura com cartas, vela e incenso"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            <span className="text-white">Mesa Real • </span>
            <span className="text-red-500">Leitura de Cartas</span>
          </h2>
          
          {/* Price Cards */}
          <div className="space-y-4">
            {/* Mesa Real */}
            <div className="bg-[#141414] rounded-xl p-4 flex items-center justify-between border border-red-900/20">
              <div className="flex items-center gap-3">
                <span className="text-xl">🎴</span>
                <div>
                  <p className="font-semibold text-white">Mesa Real</p>
                  <p className="text-sm text-gray-500">Tempo de atendimento: 40 minutos</p>
                </div>
              </div>
              <span className="text-red-500 font-bold">R$110,00</span>
            </div>
            
            {/* Pergunta Individual */}
            <div className="bg-[#141414] rounded-xl p-4 flex items-center justify-between border border-red-900/20">
              <div className="flex items-center gap-3">
                <span className="text-xl">❓</span>
                <p className="font-semibold text-white">Pergunta Individual</p>
              </div>
              <span className="text-red-500 font-bold">R$20,00 <span className="text-gray-500 font-normal text-sm">/ pergunta</span></span>
            </div>
            
            {/* Afrodite */}
            <div className="bg-[#141414] rounded-xl p-4 flex items-center justify-between border border-red-900/20">
              <div className="flex items-center gap-3">
                <span className="text-xl">💕</span>
                <p className="font-semibold text-white">Afrodite</p>
              </div>
              <span className="text-red-500 font-bold">R$35,00</span>
            </div>
          </div>
          
          {/* Trabalhos Espirituais */}
          <h3 className="text-xl font-bold mt-12 mb-6 flex items-center gap-2">
            <span>🕯️</span>
            <span className="text-white">Trabalhos Espirituais</span>
          </h3>
          
          <div className="space-y-4">
            {/* Limpeza Espiritual */}
            <div className="bg-[#141414] rounded-xl p-4 flex items-center justify-between border border-red-900/20">
              <div className="flex items-center gap-3">
                <span className="text-xl">✨</span>
                <p className="font-semibold text-white">Limpeza Espiritual</p>
              </div>
              <span className="text-red-500 font-bold">R$100,00</span>
            </div>
            
            {/* Adoçamento */}
            <div className="bg-[#141414] rounded-xl p-4 flex items-center justify-between border border-red-900/20">
              <div className="flex items-center gap-3">
                <span className="text-xl">🍯</span>
                <p className="font-semibold text-white">Adoçamento</p>
              </div>
              <span className="text-red-500 font-bold">R$350,00</span>
            </div>
            
            {/* Promoção */}
            <div className="bg-gradient-to-r from-red-900/40 to-red-800/20 rounded-xl p-4 flex items-center justify-between border border-red-600/40">
              <div className="flex items-center gap-3">
                <span className="text-xl">🎁</span>
                <div>
                  <p className="text-red-400 text-xs font-bold uppercase tracking-wider">Promoção</p>
                  <p className="font-semibold text-white">Limpeza + Adoçamento</p>
                </div>
              </div>
              <span className="text-red-500 font-bold">R$400,00</span>
            </div>
            
            {/* Abertura de Caminhos */}
            <div className="bg-[#141414] rounded-xl p-4 flex items-center justify-between border border-red-900/20">
              <div className="flex items-center gap-3">
                <span className="text-xl">🚪</span>
                <p className="font-semibold text-white">Abertura de Caminhos</p>
              </div>
              <span className="text-red-500 font-bold">R$200,00</span>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-[#141414] rounded-xl border border-red-900/20 text-center">
            <p className="text-gray-500 text-sm italic">
              Os demais trabalhos espirituais e valores são revelados mediante consulta das cartas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            <span className="text-white">Entre em </span>
            <span className="text-red-500">Contato</span>
          </h2>
          
          <div className="space-y-4">
            {/* Online Badge */}
            <div className="bg-[#141414] rounded-xl p-4 text-center border border-red-900/20">
              <p className="text-gray-300 font-medium">Atendimento 100% Online</p>
            </div>
            
            {/* Schedule */}
            <div className="bg-[#141414] rounded-xl p-4 text-center border border-red-900/20">
              <p className="text-gray-500 text-sm mb-1">Dias de Atendimento</p>
              <p className="text-white font-semibold">Terças, Quartas e Quintas</p>
              <p className="text-white font-semibold">Sábados <span className="text-gray-400 font-normal">(manhã)</span></p>
            </div>
            
            {/* WhatsApp Button */}
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#141414] hover:bg-[#1a1a1a] rounded-xl p-4 border border-red-900/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">WhatsApp</p>
                <p className="text-white font-semibold">(51) 99409-9184</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-900/20 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-red-500 font-bold text-lg tracking-wider">LUMINA</span>
          <p className="text-gray-500 text-sm">© 2024 LUMINA. Todos os direitos reservados.</p>
          <p className="text-gray-600 text-sm italic">A luz que guia a sua essência</p>
        </div>
      </footer>
    </main>
  )
}
