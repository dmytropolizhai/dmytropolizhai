import { Image } from "@/types"

// Curio
import curioLogo from '@/assets/projects/curio-today/logo.png'
import curioScreenshot1 from '@/assets/projects/curio-today/screenshot-1.jpg'
import curioScreenshot2 from '@/assets/projects/curio-today/screenshot-2.jpg'
import curioScreenshot3 from '@/assets/projects/curio-today/screenshot-3.jpg'

// Stundio

export interface Statistic {
  label: string
  value: string
}


export interface Project {
  id: string
  year: number
  tags: string[]
  preview: Image
  images: Image[]
  url?: string
  inProgress?: boolean
}

export const projects: Project[] = [
  {
    id: 'curio-today',
    year: 2025,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Payload CMS'],
    preview: {
      src: curioLogo,
    },
    images: [
      {
        src: curioScreenshot1,
      },
      {
        src: curioScreenshot2,
      },
      {
        src: curioScreenshot3,
      }
    ],
    url: 'https://curio.today'
  },
  {
    id: "stundio",
    year: 2026,
    tags: ["Flutter", "Dart", "Figma"],
    preview: {
      src: "",
    },
    images: [],
    inProgress: true
  }
]
