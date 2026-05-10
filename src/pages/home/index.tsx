import { HeroSection } from './sections/hero'
import { AboutSection } from './sections/about'
import { CtaSection } from './sections/cta'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CtaSection />
    </>
  )
}