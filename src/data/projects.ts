export interface Project {
  id: string
  year: number
  tags: string[]
  image: string
  images?: string[]
  url?: string
}

export const projects: Project[] = [
  {
    id: 'curio-today',
    year: 2025,
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Supabase'],
    image: 'https://placehold.co/800x500/2D1B0B/E35D14?text=Curio+Today',
    images: [
      'https://placehold.co/600x800/3d2b1f/fff5eb?text=Curio+Screenshot+1',
      'https://placehold.co/600x800/3d2b1f/fff5eb?text=Curio+Screenshot+2',
      'https://placehold.co/600x800/3d2b1f/fff5eb?text=Curio+Screenshot+3'
    ],
  },
  {
    id: "studio",
    year: 2025,
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Supabase"],
    image: 'https://placehold.co/800x500/2D1B0B/E35D14?text=Stundio',
    images: [
      'https://placehold.co/600x800/3d2b1f/fff5eb?text=Stundio+Screenshot+1',
      'https://placehold.co/600x800/3d2b1f/fff5eb?text=Stundio+Screenshot+2',
      'https://placehold.co/600x800/3d2b1f/fff5eb?text=Stundio+Screenshot+3'
    ],
  }
]
