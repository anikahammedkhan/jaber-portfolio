import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const menu = (
    <>
      <li className='flex justify-center'>
        <Link to='/'>Email</Link>
      </li>
      <li className='flex justify-center'>
        <Link to='/'>Instagram</Link>
      </li>
      <li className='flex justify-center'>
        <Link to='/'>Linkedin</Link>
      </li>
    </>
  )
  return (
    <div className='max-w-[1440px] w-full mx-auto md:px-[118px] px-[16px]'>
      <div className='border-t border-[#373737]'></div>
      <div className='w-full md:flex justify-between mx-auto py-5'>
        <p className='text-[#BCBCBC] text-[20px] font-normal'>
          © 2023 Jaber Hossain. All rights reserved.
        </p>
        <ul className='flex gap-5 text-[20px] z-20 text-[#BCBCBC] font-normal justify-center'>
          {menu}
        </ul>
      </div>
    </div>
  )
}

export default Footer
