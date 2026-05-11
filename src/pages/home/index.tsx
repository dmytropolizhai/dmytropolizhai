import { HeroSection } from './sections/hero'
import { AboutSection } from './sections/about'
import { CtaSection } from './sections/cta'
import { ProjectsSection } from './sections/projects'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CtaSection />
    </>
  )
}