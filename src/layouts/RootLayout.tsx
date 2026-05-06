import { Outlet } from '@tanstack/react-router'
import { NavigationBar } from '@/components/navigation-bar'
import { Footer } from '@/components/Footer'
import { Cursor } from '@/components/Cursor'

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
