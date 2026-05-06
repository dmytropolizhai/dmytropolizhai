import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProjectsSection } from '@/components/sections/projects'
import { CtaSection } from '@/components/sections/cta'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CtaSection />
    </>
  )
}
