import React from 'react'
import { Link } from 'react-router-dom'
import demo from '../../../Assets/Images/demoBlogImg.png'

const Card = ({ img, link, title }) => {
  return (
    <div className='relative md:w-[576px] w-[328px] md:h-[432px] h-[246px]'>
      <Link to={link}>
        <img src={demo} alt='' />
      </Link>
      <div className='flex absolute top-[20px] left-[20px] gap-2'>
        <div className='text-[16px] font-bold text-[#BCBCBC] px-[24px] py-[8px] bg-black bg-opacity-50 hover:bg-opacity-60'>
          Edit
        </div>
        <div className='text-[16px] font-bold text-[#BCBCBC] px-[24px] py-[8px] bg-black bg-opacity-50 hover:bg-opacity-60'>
          Delete
        </div>
      </div>
      <p className='text-[#BCBCBC] text-[20px] font-normal mt-[15px] text-right w-full'>
        {title}
      </p>
    </div>
  )
}

export default Card
