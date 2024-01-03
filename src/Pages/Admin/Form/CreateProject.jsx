import React, { useRef, useState } from 'react'
import imageCompression from 'browser-image-compression'

const CreateProject = () => {
  const fileInputRef = useRef(null)
  const [file, setFile] = useState('')
  const [base64Image, setBase64Image] = useState('')
  // added comment
  // added comment
  // added comment
  // added comment
  // added comment
  // added comment
  // added comment
  // added comment

  const handleFileUpload = async (event) => {
    const file = event.target.files[0]
    setFile(event.target.files[0].name)
    if (file) {
      try {
        const options = {
          maxSizeMB: 0.5,
          maxWidthOrHeight: 800,
          useWebWorker: true,
        }
        const compressedFile = await imageCompression(file, options)
        const reader = new FileReader()
        reader.readAsDataURL(compressedFile)
        reader.onload = () => {
          const base64String = reader.result
          setBase64Image(base64String)
        }
        reader.onerror = (error) => {
          console.error('Error reading the compressed file:', error)
        }
      } catch (error) {
        console.error('Error compressing the file:', error)
      }
    }
  }

  console.log(base64Image)

  return (
    <div className='h-[80vh] flex items-center justify-center'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[36px] font-bold text-center mb-[40px]'>
          CREATE A PROJECT
        </h1>
        <form
          className='w-[430px] flex flex-col items-center p-2'
          //   onSubmit={handleSubmit}
        >
          <div className='flex flex-row-reverse w-full items-center mb-[20px] gap-2'>
            <input
              ref={fileInputRef}
              onChange={handleFileUpload}
              type='file'
              style={{ display: 'none' }}
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
            <p>Publish Project</p>
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateProject
