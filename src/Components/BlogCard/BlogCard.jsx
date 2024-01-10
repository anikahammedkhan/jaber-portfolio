import React from 'react'

const BlogCard = ({ img, link, title }) => {
  return (
    <div className='w-[576px] h-[432px]'>
      <img src={img} alt='' className='w-full' />
      <p className='text-[#BCBCBC] text-[20px] font-normal mt-[15px] text-right w-full'>
        {title}
      </p>
    </div>
  )
}

export default BlogCard
