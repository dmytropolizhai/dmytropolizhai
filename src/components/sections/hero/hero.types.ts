export interface Particle {
  x: number
  y: number
  ox: number  // origin x
  oy: number  // origin y
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  life: number
  maxLife: number
  shape: 'square' | 'rect' | 'dot'
  rotation: number
  rotSpeed: number
}

export interface HeroScrollMotionValues {
  badgeX: import('framer-motion').MotionValue<number>
  badgeOpacity: import('framer-motion').MotionValue<number>
  badgeSkew: import('framer-motion').MotionValue<number>
  l1X: import('framer-motion').MotionValue<number>
  l1Y: import('framer-motion').MotionValue<number>
  l1Opacity: import('framer-motion').MotionValue<number>
  l1Filter: import('framer-motion').MotionValue<string>
  l1Skew: import('framer-motion').MotionValue<number>
  emX: import('framer-motion').MotionValue<number>
  emY: import('framer-motion').MotionValue<number>
  emOpacity: import('framer-motion').MotionValue<number>
  emFilter: import('framer-motion').MotionValue<string>
  emScale: import('framer-motion').MotionValue<number>
  muX: import('framer-motion').MotionValue<number>
  muY: import('framer-motion').MotionValue<number>
  muOpacity: import('framer-motion').MotionValue<number>
  muFilter: import('framer-motion').MotionValue<string>
  muSkew: import('framer-motion').MotionValue<number>
  subY: import('framer-motion').MotionValue<number>
  subOpacity: import('framer-motion').MotionValue<number>
  subFilter: import('framer-motion').MotionValue<string>
  ctaScale: import('framer-motion').MotionValue<number>
  ctaOpacity: import('framer-motion').MotionValue<number>
  ctaY: import('framer-motion').MotionValue<number>
  statsY: import('framer-motion').MotionValue<number>
  statsOpacity: import('framer-motion').MotionValue<number>
  sectionScale: import('framer-motion').MotionValue<number>
  glitchOpacity: import('framer-motion').MotionValue<number>
}
