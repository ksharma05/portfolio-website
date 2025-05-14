import React from 'react'
import Section from '../templates/Section'

const Hero = () => {
  return (
    <Section>
    <div className={"h-full w-full bg-center bg-cover bg-no-repeat" + ` bg-[url('src/assets/HeroImage.png')]`}>
      <div className="h-full w-full bg-radial to-black">
        <span className="relative top-[90%] left-1/2 -transform-y-1/2 text-center">Scroll 🠋</span>
      </div>
    </div>
  </Section>
  )
}

export default Hero