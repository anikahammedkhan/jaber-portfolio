import React, { useEffect, useState } from 'react'
import img from '../../Assets/Images/profileImg.png'
import { ArrowOutward } from '../../Assets/Icons/ArrowOutward'
import { Link } from 'react-router-dom'

const About = () => {
  const [shouldBreak, setShouldBreak] = useState(false)

  useEffect(() => {
    const handleWindowSizeChange = () => {
      const screenWidth = window.innerWidth
      console.log('texttttttt', screenWidth)
      const screenSizeBreakpoint = 426
      if (screenWidth < screenSizeBreakpoint) {
        setShouldBreak(true)
      } else {
        setShouldBreak(false)
      }
    }
    window.addEventListener('resize', handleWindowSizeChange)
    handleWindowSizeChange()
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return (
    <div>
      <div className='border-t border-b border-[#373737]'>
        <div className='max-w-[1440px] mx-auto px-[50px]'>
          <div className='h-[697px] md:flex md:flex-row flex flex-col-reverse items-center mt-10 md:mt-0'>
            <div className='border-r border-[#373737] flex items-center justify-center md:w-[754px] w-[328px] h-[697px]'>
              <div className='flex flex-col items-center md:items-start'>
                <h1 className='md:text-[48px] text-[24px] font-bold uppercase text-[#838383] md:leading-[65px]  leading-[35px] text-center md:text-left'>
                  Designing{' '}
                  <span className='text-[#BCBCBC]'>
                    Dreams, <br /> Crafting
                  </span>{' '}
                  Experiences
                </h1>
                <p className='text-[20px] text-[#A7A7A7] mt-[16px]'>
                  Unlock the power of versatile design expertise and unleash
                  your <br />
                  product's full potential with a UI/UX designer by your side.
                </p>
                <Link
                  to='/contact'
                  className='flex items-center justify-center border-2 border-[#373737] w-[168px] h-[65px] md:mt-[85px] mt-[50px]'
                >
                  <p className='text-[24px] text-[#BCBCBC] font-bold'>
                    Contact
                  </p>
                  <ArrowOutward />
                </Link>
              </div>
            </div>
            <div className='mb-10 md:mb-0'>
              <img src={img} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='md:my-[125px] my-[56px]'>
        <h1 className='text-[#BCBCBC] text-[48px] font-bold text-center my-[16px]'>
          About Me
        </h1>
        <p className='text-[#A7A7A7] text-[20px] md:w-[860px] w-[328px] mx-auto mb-[72px]'>
          Hi, I’m Jaber Hossain. I’m a UI/UX designer pushing creative
          boundaries. Seamlessly blending art, technology, and innovation.
          Crafting captivating experiences that leave a lasting impact.
          Inspiring awe through visionary design solutions. I provide UI/UX and
          product design services.
        </p>
        <h3 className='text-[#BCBCBC] text-[24px] w-[860px] mx-auto px-[16px] md:px-0'>
          <span className='text-[#838383]'>2022 - Present</span> Jr. UI/UX
          Designer {shouldBreak && <br />} @Chancelor Tech, LLC
        </h3>
      </div>
    </div>
  )
}

export default About
