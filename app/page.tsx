'use client'

import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Sessions } from '@/components/sessions'
import { Book } from '@/components/book'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Closing } from '@/components/closing'
import { useScrollToTop } from '@/lib/use-scroll-to-top'

export default function Page() {
  useScrollToTop()

  return (
    <main className="min-h-svh bg-background">
      <Nav />
      <Hero />
      <Sessions />
      <Book />
      <About />
      <Contact />
      <Closing />
    </main>
  )
}
