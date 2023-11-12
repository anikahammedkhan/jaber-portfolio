import React from 'react'
import demo from '../../Assets/Images/demoBlogImg.png'

const BlogCard = ({ img, link, title, author }) => {
  return (
    <div className='w-[576px] h-[432px]'>
      <img src={demo} alt='' className='w-full' />
      <p className='text-[#BCBCBC] text-[20px] font-normal mt-[15px] text-right w-full'>
        {title}
      </p>
      <p className='text-[#BCBCBC] text-[20px] font-normal text-right w-full'>
        {author}
      </p>
    </div>
  )
}

export default BlogCard
