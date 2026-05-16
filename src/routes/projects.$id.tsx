import { createFileRoute } from '@tanstack/react-router'
import { ProjectDetailPage } from '@/pages/project-detail'

export const Route = createFileRoute('/projects/$id')({
  component: ProjectDetailPage,
})
