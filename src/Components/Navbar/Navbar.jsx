import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const menu = (
    <>
      <li className='flex justify-center'>
        <NavLink to='/' className='nav-link'>
          Works
        </NavLink>
      </li>
      <li className='flex justify-center'>
        <NavLink to='/about' className='nav-link'>
          About
        </NavLink>
      </li>
      <li className='flex justify-center'>
        <NavLink to='/blogs' className='nav-link'>
          Blogs
        </NavLink>
      </li>
    </>
  )
  return (
    <div className='drawer z-50 sticky top-0'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        {/* Navbar */}
        <div
          className={`max-w-[1440px] mx-auto navbar relative flex justify-between px-[118px] bg-[#0c0c0c] bg-opacity-40 h-[100px] ${
            isScrolling ? '' : 'border-b border-[#373737]'
          }`}
          style={{
            backdropFilter: 'blur(20px)',
          }}
        >
          <Link to='/'>
            <p className='text-[#BCBCBC] text-[24px]'>Jaber Hossain</p>
          </Link>
          <div className='flex-none lg:hidden'>
            <label
              htmlFor='my-drawer-3'
              aria-label='open sidebar'
              className='btn btn-square btn-ghost'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current text-white'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>
          <div className='flex-none hidden lg:block'>
            <ul className='flex gap-5 w-full text-[20px] z-20 hover:text-white'>
              {menu}
            </ul>
          </div>
        </div>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='flex flex-col pt-10 w-[200px] min-h-full bg-[#002366] text-white font-semibold'>
          <Link to='/'>
            <p>Jaber Hossain</p>
          </Link>
          {menu}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
