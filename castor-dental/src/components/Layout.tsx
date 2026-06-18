import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  const { pathname } = useLocation()

  // scroll to top on route change (CSR only — no-op on SSR)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 })
    }
  }, [pathname])

  // basic reveal-on-scroll via IntersectionObserver (CSR only)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const reveal = (el: Element) => {
      el.classList.add('is-visible')
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal(e.target)
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    // immediately show anything already in view
    requestAnimationFrame(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.92) reveal(el)
      })
    })
    return () => io.disconnect()
  }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
