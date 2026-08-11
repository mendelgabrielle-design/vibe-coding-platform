export type Department = 'cosmeticos' | 'bazar'

export type CategoryId = 'perfumes' | 'chas'

export type Product = {
  id: string
  name: string
  brand: string
  department: Department
  category: CategoryId
  price: number
  oldPrice?: number
  image: string
  rating: number
  reviews: number
  installments?: string
  tag?: string
}

export const departments: {
  id: Department
  label: string
  description: string
}[] = [
  { id: 'cosmeticos', label: 'Cosméticos', description: 'Perfumes e fragrâncias importadas' },
  { id: 'bazar', label: 'Bazar', description: 'Chás solúveis importados' },
]

export const categories: {
  id: CategoryId
  label: string
  department: Department
  image: string
}[] = [
  { id: 'perfumes', label: 'Perfumes', department: 'cosmeticos', image: '/images/perfume-1million.jpeg' },
  { id: 'chas', label: 'Chás', department: 'bazar', image: '/images/cha-forest-fruit.png' },
]

export const products: Product[] = [
  {
    id: 'perfume-1million',
    name: 'Rabanne 1 Million Eau de Toilette 100ml',
    brand: 'Rabanne',
    department: 'cosmeticos',
    category: 'perfumes',
    price: 500,
    image: '/images/perfume-1million.jpeg',
    rating: 5,
    reviews: 214,
    installments: 'ou R$ 500,00 à vista',
    tag: 'Promoção relâmpago',
  },
  {
    id: 'cha-multifruit',
    name: 'Chá Solúvel Ekland Multifruit 350g',
    brand: 'Ekland',
    department: 'bazar',
    category: 'chas',
    price: 29.9,
    image: '/images/cha-multifruit.png',
    rating: 5,
    reviews: 64,
    installments: 'em até 2x de R$ 14,95',
    tag: 'Mais vendido',
  },
  {
    id: 'cha-lemon',
    name: 'Chá Solúvel Ekland Limão 350g',
    brand: 'Ekland',
    department: 'bazar',
    category: 'chas',
    price: 29.9,
    image: '/images/cha-lemon.png',
    rating: 5,
    reviews: 52,
    installments: 'em até 2x de R$ 14,95',
  },
  {
    id: 'cha-forest-fruit',
    name: 'Chá Solúvel Ekland Frutas Vermelhas 350g',
    brand: 'Ekland',
    department: 'bazar',
    category: 'chas',
    price: 29.9,
    image: '/images/cha-forest-fruit.png',
    rating: 5,
    reviews: 71,
    installments: 'em até 2x de R$ 14,95',
    tag: 'Novo',
  },
  {
    id: 'cha-raspberry',
    name: 'Chá Solúvel Ekland Framboesa 350g',
    brand: 'Ekland',
    department: 'bazar',
    category: 'chas',
    price: 29.9,
    image: '/images/cha-raspberry.png',
    rating: 5,
    reviews: 48,
    installments: 'em até 2x de R$ 14,95',
  },
  {
    id: 'cha-peach',
    name: 'Chá Solúvel Ekland Pêssego 350g',
    brand: 'Ekland',
    department: 'bazar',
    category: 'chas',
    price: 29.9,
    image: '/images/cha-peach.png',
    rating: 5,
    reviews: 57,
    installments: 'em até 2x de R$ 14,95',
  },
]

export const formatPrice = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
