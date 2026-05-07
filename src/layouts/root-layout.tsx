import { Outlet } from '@tanstack/react-router'
import { NavigationBar } from '@/components/navigation-bar'
import { Footer } from '@/components/footer'
import { Cursor } from '@/components/cursor'
import { useIsMobile } from '@/hooks/use-is-mobile';

export function RootLayout() {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && <Cursor />}
      <NavigationBar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
