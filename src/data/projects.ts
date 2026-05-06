export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  year: number
  url?: string
}

export const projects: Project[] = [
  {
    id: 'news-portal',
    title: 'News Portal',
    description: 'Full-featured news platform with admin panel, categories, and SEO optimization for a local Latvian media outlet.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    image: 'https://placehold.co/800x500/111111/d4ff6e?text=News+Portal',
    year: 2024,
  },
  {
    id: 'booking-bot',
    title: 'Booking Telegram Bot',
    description: 'Automated appointment booking bot for a beauty salon. Handles scheduling, reminders, and client management.',
    tags: ['Python', 'aiogram', 'SQLite', 'Telegram API'],
    image: 'https://placehold.co/800x500/111111/d4ff6e?text=Booking+Bot',
    year: 2024,
  },
  {
    id: 'landing-cafe',
    title: 'Restaurant Landing',
    description: 'High-converting landing page for a Riga restaurant with menu, gallery, and reservation form.',
    tags: ['React', 'Vite', 'SCSS', 'Framer Motion'],
    image: 'https://placehold.co/800x500/111111/d4ff6e?text=Restaurant+Landing',
    year: 2024,
  },
  {
    id: 'price-parser',
    title: 'Price Monitoring Script',
    description: 'Automated price tracking script that monitors competitor prices and sends daily Telegram reports.',
    tags: ['Python', 'BeautifulSoup', 'Telegram API', 'Cron'],
    image: 'https://placehold.co/800x500/111111/d4ff6e?text=Price+Parser',
    year: 2023,
  },
  {
    id: 'salon-site',
    title: 'Beauty Salon Website',
    description: 'Complete multi-page website with online booking integration, pricing tables, and staff profiles.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    image: 'https://placehold.co/800x500/111111/d4ff6e?text=Salon+Website',
    year: 2023,
  },
  {
    id: 'catalog-bot',
    title: 'Product Catalog Bot',
    description: 'Interactive Telegram bot acting as a product catalog with cart, search, and WhatsApp checkout.',
    tags: ['Node.js', 'Telegraf', 'MongoDB'],
    image: 'https://placehold.co/800x500/111111/d4ff6e?text=Catalog+Bot',
    year: 2023,
  },
]
