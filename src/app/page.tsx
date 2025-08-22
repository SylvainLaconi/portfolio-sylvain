import AboutMeSection from './components/sections/about-me-section'
import HeroSection from './components/sections/hero-section'
import ServicesSection from './components/sections/services-section'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
    </div>
  )
}
