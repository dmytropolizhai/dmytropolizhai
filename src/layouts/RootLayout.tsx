import { Outlet } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Cursor } from '@/components/Cursor'

export function RootLayout() {
  return (
    <>
      <Cursor />
      <Nav />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
