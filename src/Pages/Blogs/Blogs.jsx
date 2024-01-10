import React, { useEffect, useState } from 'react'
import BlogCard from '../../Components/BlogCard/BlogCard'
import axios from 'axios'

const Blogs = () => {
  const [mappingData, setMappingData] = useState([])
  useEffect(() => {
    axios
      .get('https://jaber-portfolio-server.vercel.app/blog')
      .then((response) => {
        setMappingData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching Blog data:', error)
      })
  }, [])

  return (
    <div className='max-w-[1440px] mx-auto px-[118px]'>
      <div className='grid grid-cols-2 gap-x-[50px] gap-y-[70px] my-[120px]'>
        {mappingData?.map((item) => (
          <BlogCard
            key={item._id}
            img={
              item.image &&
              `data:${item.image.contentType};base64,${item.image.data}`
            }
            subtitle={item.subtitle}
            link={item.link}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Blogs
