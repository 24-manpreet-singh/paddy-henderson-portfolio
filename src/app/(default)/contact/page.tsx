import ContactInfo from '@/components/molecules/contact-info'
import ContactUS from '@/components/molecules/contact-us'
import HeroSection from '@/components/molecules/hero-section'
import { memo } from 'react'

const ContactWrapper = () => {
  return (
    <div>
      <HeroSection
        title="Contact Us"
        description="Stories That Matter, Words That Connect – Let's Collaborate"
        name="paddy Henderson"
      />
      {/* End Hero */}
      {/* Start Section*/}
      <section className="relative md:py-24 py-16">

        <ContactUS />
        <ContactInfo />
      </section>{/*end section*/}

    </div>
  )
}

export default memo(ContactWrapper)