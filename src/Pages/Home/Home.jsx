import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import axios from 'axios'

const Home = () => {
  const [mappingData, setMappingData] = useState([])

  useEffect(() => {
    axios
      .get('https://jaber-portfolio-server.vercel.app/projects')
      .then((response) => {
        setMappingData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching Projects data:', error)
      })
  }, [])

  return (
    <div className='max-w-[1440px] mx-auto md:px-[118px] px-[16px]'>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-x-[50px] gap-x-[25px] md:gap-y-[108px] gap-y-[56px] md:my-[120px] my-[60px] justify-items-center'>
        {mappingData?.map((item) => (
          <Card
            key={item._id}
            img={
              item.image &&
              `data:${item.image.contentType};base64,${item.image.data}`
            }
            link={item.link}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
