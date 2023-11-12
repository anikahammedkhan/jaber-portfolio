import React from 'react'
import { Link } from 'react-router-dom'
import demo from '../../Assets/Images/homeDemo.png'

const Card = ({ img, link, title }) => {
  return (
    <div className='w-[576px] h-[432px]'>
      <Link to={link}>
        <img src={demo} alt='' />
      </Link>
      <p className='text-[#BCBCBC] text-[20px] font-normal mt-[15px] text-right w-full'>
        {title}
      </p>
    </div>
  )
}

export default Card
