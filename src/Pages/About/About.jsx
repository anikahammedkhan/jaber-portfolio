import React from 'react'
import img from '../../Assets/Images/profileImg.png'
import { ArrowOutward } from '../../Assets/Icons/ArrowOutward'

const About = () => {
  return (
    <div>
      <div className='border-t border-b border-[#373737] mt-[45px]'>
        <div className='max-w-[1440px] mx-auto px-[50px]'>
          <div className='h-[697px] flex items-center'>
            <div className='border-r border-[#373737] flex items-center justify-center w-[754px] h-[697px]'>
              <div className=''>
                <h1 className='text-[48px] font-bold uppercase text-[#838383] leading-[65px]'>
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
                <div className='flex items-center justify-center border-2 border-[#373737] w-[168px] h-[65px] mt-[85px]'>
                  <p className='text-[24px] text-[#BCBCBC] font-bold'>
                    Contact
                  </p>
                  <ArrowOutward />
                </div>
              </div>
            </div>
            <div>
              <img src={img} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='my-[125px]'>
        <h1 className='text-[#BCBCBC] text-[48px] font-bold text-center my-[16px]'>
          About Me
        </h1>
        <p className='text-[#A7A7A7] text-[20px] w-[860px] mx-auto mb-[72px]'>
          Hi, I’m Jaber Hossain. I’m a UI/UX designer pushing creative
          boundaries. Seamlessly blending art, technology, and innovation.
          Crafting captivating experiences that leave a lasting impact.
          Inspiring awe through visionary design solutions. I provide UI/UX and
          product design services.
        </p>
        <h3 className='text-[#BCBCBC] text-[24px] w-[860px] mx-auto'>
          Current - Jr. UI/UX Designer @Chancelor Tech
        </h3>
      </div>
    </div>
  )
}

export default About
