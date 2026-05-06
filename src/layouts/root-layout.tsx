import { Outlet } from '@tanstack/react-router'
import { NavigationBar } from '@/components/navigation-bar'
import { Footer } from '@/components/footer'
import { Cursor } from '@/components/cursor'

export function RootLayout() {
  return (
    <>
      <Cursor />
      <NavigationBar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
