import { createFileRoute } from '@tanstack/react-router'
import { ProjectDetailPage } from '@/pages/projects-detail'

export const Route = createFileRoute('/$locale/projects/$id')({
  component: ProjectDetailPage,
})
