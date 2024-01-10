import React, { useRef, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const CreateBlog = () => {
  const fileInputRef = useRef(null)
  const [file, setFile] = useState('')

  const handleFileUpload = async (event) => {
    event.preventDefault()
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
      const response = await axios.post(
        'https://jaber-portfolio-server.vercel.app/blog',
        formData,
        { headers: headers },
      )
      console.log('Response:', response.data)
      setFile('')
      toast.success('Successfully Created Blog!')
      event.target.reset()
    } catch (error) {
      console.error('Error creating blog:', error)
      toast.error('Error creating blog')
    }
  }

  return (
    <div className='h-[80vh] flex items-center justify-center'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[36px] font-bold text-center mb-[40px]'>
          CREATE A BLOG
        </h1>
        <form
          className='w-[430px] flex flex-col items-center p-2'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-row-reverse w-full items-center mb-[20px] gap-2'>
            <input
              ref={fileInputRef}
              type='file'
              style={{ display: 'none' }}
              name='image'
              onChange={handleFileUpload}
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
            required
          />
          <input
            type='text'
            className='w-[430px] bg-[#0C0C0C] h-[56px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] mb-[20px]'
            placeholder='Sub Title'
            name='sub-title'
            id='sub-title'
            required
          />
          <input
            type='text'
            className='w-[430px] bg-[#0C0C0C] h-[56px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] mb-[20px]'
            placeholder='Link'
            name='link'
            id='link'
            required
          />
          <button
            type='submit'
            value='Send'
            className='flex items-center justify-center border-2 border-[#373737] w-[268px] h-[65px] bg-[#141414] mt-5 text-[24px] font-bold gap-2'
          >
            <p>Publish Blog</p>
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlog
