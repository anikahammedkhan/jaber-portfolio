import React, { useEffect, useState } from 'react'
import { ArrowOutward } from '../../../Assets/Icons/ArrowOutward'
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BlogsA = () => {
  const [blogs, setBlogs] = useState([])
  // const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios
      .get('https://jaber-portfolio-server.vercel.app/blog')
      .then((response) => {
        setBlogs(response.data)
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error)
      })
  }, [])
  return (
    <div className='max-w-[1440px] mx-auto md:px-[118px] px-[16px]'>
      <Link
        to='/dashboard/create-blog'
        className='flex items-center justify-center border-2 border-[#373737] w-[300px] h-[65px] bg-[#141414] mt-5 text-[24px] font-bold gap-2'
      >
        <p>Create A Blog</p>
        <ArrowOutward />
      </Link>
      <h1 className='text-[36px] font-bold my-[40px]'>MY BLOGS</h1>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-x-[50px] gap-x-[25px] md:gap-y-[108px] gap-y-[56px] md:mt-[60px] mt-[60px] justify-items-center'>
        {blogs?.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            img={
              item.image &&
              `data:${item.image.contentType};base64,${item.image.data}`
            }
            link={item.link}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogsA
