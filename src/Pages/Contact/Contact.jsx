import React from 'react'
import { ArrowOutward } from '../../Assets/Icons/ArrowOutward'

const Contact = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-[118px] flex h-[80vh] justify-center items-center'>
      <form action='' className='w-[430px] flex flex-col items-center p-2'>
        <input
          type='text'
          className='w-[430px] bg-[#0C0C0C] h-[56px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] mb-[20px]'
          placeholder='Name'
        />
        <input
          type='text'
          className='w-[430px] bg-[#0C0C0C] h-[56px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] mb-[20px]'
          placeholder='Email'
        />
        <input
          type='number'
          className='w-[430px] bg-[#0C0C0C] h-[56px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] mb-[20px]'
          placeholder='Phone'
        />
        <textarea
          className='w-[430px] bg-[#0C0C0C] h-[195px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] py-[10px] mb-[20px]'
          placeholder='Message'
        ></textarea>
        <div className='flex items-center justify-center border-2 border-[#373737] w-[168px] h-[65px] bg-[#141414]'>
          <p className='text-[24px] text-[#BCBCBC] font-bold'>SEND</p>
          <ArrowOutward />
        </div>
      </form>
    </div>
  )
}

export default Contact
