import React from 'react'
import { ButtonPrimary, ButtonOutline } from './Button'

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36'>
        <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>
            <div>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                Appetizing Continental Dishes To Satisfy Your Cravings
                </h2>

                <div className="flex items-center gap-3">
                    <ButtonOutline href="#service" label="Scroll down" icon="arrow_downward"/>
                </div>
            </div>

            <div className="hidden lg:block">
                <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-green-600 via-25% via-green-400/40 to-65% rounded-full overflow-hidden'>
                    <img src="./images/hero-img.png" width={656}height={800} alt="Rapheal CLinton" className='w-full'/>
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero
