import React from 'react'
import { STARS_BACKGROUND_URL } from '../../utility/Constants'

const IntroSlider = ({children}) => {
  return (
    <div className={"h-screen w-screen bg-no-repeat flex justify-center items-center "} style={{backgroundImage: `url(${'src/assets/leaf.png'}),url(${'src/assets/leaf-rot.png'})`, backgroundPosition: 'right center, left center', backgroundSize: 'contain, contain'}}>
        {children}
      </div>
  )
}

export default IntroSlider