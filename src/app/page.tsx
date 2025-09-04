import HeroSection from '@/components/sections/HeroSectionNew'
import ServicesSection from '@/components/sections/ServicesNew'
import TechnologySection from '@/components/sections/TechnologySection'
import PartnersSection from '@/components/sections/PartnersSection'
import TeamSection from '@/components/sections/TeamSection'
import InsightsSection from '@/components/sections/InsightsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <TechnologySection />
      <TeamSection />
      <InsightsSection />
    </>
  )
}
