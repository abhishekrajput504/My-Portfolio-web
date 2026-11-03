import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Layout } from '@/layout/Layout'
import { SeoHead } from '@/components/SeoHead'
import { profile } from '@/data/profile'
import { Hero } from '@/sections/Hero/Hero'
import { About } from '@/sections/About/About'
import { Skills } from '@/sections/Skills/Skills'
import { Projects } from '@/sections/Projects/Projects'
import { Experience } from '@/sections/Experience/Experience'
import { Contact } from '@/sections/Contact/Contact'
import { scrollToSection } from '@/utils/scroll'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      // Wait a tick for layout to settle before measuring scroll position.
      requestAnimationFrame(() => scrollToSection(id))
    }
  }, [location.hash])

  return (
    <Layout>
      <SeoHead
        title={`${profile.name} — Java Backend Developer & Application Engineer`}
        description={profile.tagline}
        path="/"
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  )
}
