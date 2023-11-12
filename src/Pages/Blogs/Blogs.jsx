import React from 'react'
import BlogCard from '../../Components/BlogCard/BlogCard'

const Blogs = () => {
  const demoData = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/200/300',
      link: '/',
      title: "Canberra's Best",
      author: 'John Doe',
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/200/300',
      link: '/',
      title: "Canberra's Best",
      author: 'John Doe',
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/200/300',
      link: '/',
      title: "Canberra's Best",
      author: 'John Doe',
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/200/300',
      link: '/',
      title: "Canberra's Best",
      author: 'John Doe',
    },
    {
      id: 5,
      imageUrl: 'https://picsum.photos/200/300',
      link: '/',
      title: "Canberra's Best",
      author: 'John Doe',
    },
    {
      id: 6,
      imageUrl: 'https://picsum.photos/200/300',
      link: '/',
      title: "Canberra's Best",
      author: 'John Doe',
    },
    {
      id: 7,
      imageUrl: 'https://picsum.photos/200/300',
      link: '/',
      title: "Canberra's Best",
      author: 'John Doe',
    },
  ]
  return (
    <div className='max-w-[1440px] mx-auto px-[118px]'>
      <div className='grid grid-cols-2 gap-x-[50px] gap-y-[70px] my-[120px]'>
        {demoData?.map((item) => (
          <BlogCard
            key={item.id}
            img={item.imageUrl}
            link={item.link}
            title={item.title}
            author={item.author}
          />
        ))}
      </div>
    </div>
  )
}

export default Blogs
