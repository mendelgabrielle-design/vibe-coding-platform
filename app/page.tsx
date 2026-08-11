import { TopBar } from '@/components/top-bar'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { BenefitsBar } from '@/components/benefits-bar'
import { CategoryShowcase } from '@/components/category-showcase'
import { ProductSection } from '@/components/product-section'
import { AboutSection } from '@/components/about-section'
import { SiteFooter } from '@/components/site-footer'
import { CartDrawer } from '@/components/cart-drawer'
import { SupportBot } from '@/components/support-bot'
import { products } from '@/lib/products'

export default function HomePage() {
  const bestSellers = products.filter(
    (p) => p.tag === 'Mais vendido' || p.tag === 'Promoção relâmpago' || p.oldPrice,
  )
  const cosmeticos = products.filter((p) => p.department === 'cosmeticos')
  const bazar = products.filter((p) => p.department === 'bazar')

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <SiteHeader />
      <main>
        <Hero />
        <BenefitsBar />
        <CategoryShowcase />

        <ProductSection
          title="Mais vendidos e ofertas"
          subtitle="Os favoritos da Ella com preços especiais"
          products={bestSellers}
        />
        <ProductSection
          id="cosmeticos"
          title="Cosméticos"
          subtitle="Perfumes e fragrâncias importadas exclusivas"
          products={cosmeticos}
        />
        <ProductSection
          id="bazar"
          title="Bazar"
          subtitle="Chás solúveis importados Ekland"
          products={bazar}
        />

        <AboutSection />
      </main>
      <SiteFooter />
      <CartDrawer />
      <SupportBot />
    </div>
  )
}
