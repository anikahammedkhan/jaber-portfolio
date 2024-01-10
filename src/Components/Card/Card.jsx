import React from 'react'
import { Link } from 'react-router-dom'
import demo from '../../Assets/Images/homeDemo.png'

const Card = ({ img, link, title }) => {
  return (
    <div className='md:w-[576px] w-[328px] md:h-[432px] h-[246px]'>
      <Link to={link}>
        <img src={img} alt='' />
      </Link>
      <p className='text-[#BCBCBC] text-[20px] font-normal mt-[15px] text-right w-full'>
        {title}
      </p>
    </div>
  )
}

export default Card
