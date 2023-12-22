import React from 'react'
import Card from './Card'
import { ArrowOutward } from '../../../Assets/Icons/ArrowOutward'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const demoData = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/200/300',
      link: '/',
      title: "Canberra's Best",
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/200/300',
      link: '/',
      title: "Canberra's Best",
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/200/300',
      link: '/',
      title: "Canberra's Best",
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/200/300',
      link: '/',
      title: "Canberra's Best",
    },
  ]
  return (
    <div className='max-w-[1440px] mx-auto md:px-[118px] px-[16px]'>
      <Link
        to='/dashboard/create-project'
        className='flex items-center justify-center border-2 border-[#373737] w-[300px] h-[65px] bg-[#141414] mt-5 text-[24px] font-bold gap-2'
      >
        <p>Create A Project</p>
        <ArrowOutward />
      </Link>
      <h1 className='text-[36px] font-bold my-[40px]'>MY PROJECTS</h1>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-x-[50px] gap-x-[25px] md:gap-y-[108px] gap-y-[56px] md:pb-[120px] mt-[60px] justify-items-center'>
        {demoData?.map((item) => (
          <Card
            key={item.id}
            img={item.imageUrl}
            link={item.link}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
