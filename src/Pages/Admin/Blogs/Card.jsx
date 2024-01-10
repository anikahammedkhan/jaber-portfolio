import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Card = ({ img, link, title, subtitle, id, setBlogs }) => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  const uuid = userData.uuid
  const token = userData.token
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this Blog?',
    )
    if (confirmDelete) {
      axios
        .delete(`https://jaber-portfolio-server.vercel.app/blog/${id}`, {
          headers: {
            uuid: uuid,
            token: token,
          },
        })
        .then((response) => {
          console.log('Project deleted successfully:', response.data)
          toast.success('Project deleted successfully!')
          axios
            .get('https://jaber-portfolio-server.vercel.app/blog')
            .then((response) => {
              setBlogs(response.data)
            })
            .catch((error) => {
              console.error('Error fetching blog data:', error)
            })
        })
        .catch((error) => {
          console.error('Error deleting project:', error)
          toast.error('Error deleting project')
        })
    }
  }

  return (
    <div className='relative md:w-[576px] w-[328px] md:h-[432px] h-[246px]'>
      <Link to={link}>
        <img src={img} alt={title} />
      </Link>
      <div className='flex absolute top-[20px] left-[20px] gap-2'>
        <div className='text-[16px] font-bold text-[#BCBCBC] px-[24px] py-[8px] bg-black bg-opacity-50 hover:bg-opacity-60 cursor-pointer'>
          Edit
        </div>
        <div
          className='text-[16px] font-bold text-[#BCBCBC] px-[24px] py-[8px] bg-black bg-opacity-50 hover:bg-opacity-60 cursor-pointer'
          onClick={handleDelete}
        >
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
