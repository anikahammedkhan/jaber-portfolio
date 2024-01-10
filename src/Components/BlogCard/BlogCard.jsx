import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ img, link, title }) => {
  return (
    <Link
      to={link}
      className='w-[576px] h-[432px]'
      target='_blank'
      rel='noopener noreferrer'
    >
      <img src={img} alt='' className='w-full' />
      <p className='text-[#BCBCBC] text-[20px] font-normal mt-[15px] text-right w-full'>
        {title}
      </p>
    </Link>
  )
}

export default BlogCard
