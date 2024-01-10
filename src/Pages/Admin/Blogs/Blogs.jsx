import React, { useEffect, useRef, useState } from 'react'
import { ArrowOutward } from '../../../Assets/Icons/ArrowOutward'
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import toast from 'react-hot-toast'
import './custom-styling.css'

const BlogsA = () => {
  const [blogs, setBlogs] = useState([])
  const [open, setOpen] = useState(false)
  const [modalData, setModalData] = useState([])

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
            setBlogs={setBlogs}
            setOpen={setOpen}
            setModalData={setModalData}
          />
        ))}
      </div>
      {open ? (
        <EditModal
          open={open}
          setOpen={setOpen}
          modalData={modalData}
          setBlogs={setBlogs}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default BlogsA

export const EditModal = ({ open, setOpen, modalData, setBlogs }) => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    link: '',
    image: '',
  })

  console.log(modalData)
  const fileInputRef = useRef(null)
  const [file, setFile] = useState('')

  useEffect(() => {
    if (modalData) {
      setFormData({
        title: modalData.title || '',
        subtitle: modalData.subtitle || '',
        link: modalData.link || '',
        image: modalData.image.data || '',
      })
    }
  }, [modalData])

  const handleFileUpload = (event) => {
    setFile(event.target.files[0].name)
  }
  const userData = JSON.parse(localStorage.getItem('userData'))
  const uuid = userData.uuid
  const token = userData.token

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const title = formData.get('title')
    const subTitle = formData.get('sub-title')
    const link = formData.get('link')
    const imageFile = formData.get('image')
    const headers = {
      uuid: uuid,
      token: token,
    }
    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('subtitle', subTitle)
      formData.append('link', link)
      formData.append('image', imageFile)
      const response = await axios.put(
        `https://jaber-portfolio-server.vercel.app/blog/${modalData?._id}`,
        formData,
        { headers: headers },
      )
      console.log('Response:', response.data)
      setFile('')
      toast.success('Blog Updated Successfully!')
      event.target.reset()
      setOpen(false)
      axios
        .get('https://jaber-portfolio-server.vercel.app/blog')
        .then((response) => {
          setBlogs(response.data)
        })
        .catch((error) => {
          console.error('Error fetching blog data:', error)
        })
    } catch (error) {
      console.error('Error creating blog:', error)
      toast.error('Error creating blog')
    }
  }
  const myRef = useRef(null)
  const closeIcon = (
    <svg fill='none' viewBox='0 0 15 15' height='3em' width='3em'>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z'
        clipRule='evenodd'
      />
    </svg>
  )

  return (
    <>
      <div ref={myRef} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        closeIcon={closeIcon}
        container={myRef.current}
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
      >
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-[36px] font-bold text-center mb-[40px]'>
            Edit : {modalData?.title}
          </h1>
          <form
            className='w-[430px] flex flex-col items-center p-2'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-row-reverse w-full items-center mb-[20px] gap-2'>
              <input
                ref={fileInputRef}
                onChange={handleFileUpload}
                type='file'
                style={{ display: 'none' }}
                name='image'
                required
                // multiple={false}
              />
              <button
                className='w-[160px] bg-[#0C0C0C] h-[36px] border-[#373737] border focus:border-[#373737] px-[10px]'
                onClick={() => fileInputRef.current.click()}
              >
                Upload Image
              </button>
              {file ? <p>{file}</p> : ''}
            </div>
            <input
              type='text'
              className='w-[430px] bg-[#0C0C0C] h-[56px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] mb-[20px]'
              placeholder='Title'
              name='title'
              id='title'
              defaultValue={modalData?.title}
              required
            />
            <input
              type='text'
              className='w-[430px] bg-[#0C0C0C] h-[56px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] mb-[20px]'
              placeholder='Sub Title'
              name='sub-title'
              defaultValue={modalData?.subtitle}
              id='sub-title'
              required
            />
            <input
              type='text'
              className='w-[430px] bg-[#0C0C0C] h-[56px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] mb-[20px]'
              placeholder='Link'
              name='link'
              id='link'
              defaultValue={modalData?.link}
              required
            />
            <button
              type='submit'
              value='Send'
              className='flex items-center justify-center border-2 border-[#373737] w-[268px] h-[65px] bg-[#141414] mt-5 text-[24px] font-bold gap-2'
            >
              <p>Update Blog</p>
            </button>
          </form>
        </div>
      </Modal>
    </>
  )
}
