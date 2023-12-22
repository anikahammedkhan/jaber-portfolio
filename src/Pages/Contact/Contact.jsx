import React, { useRef, useState } from 'react'
import { ArrowOutward } from '../../Assets/Icons/ArrowOutward'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import ReCAPTCHA from 'react-google-recaptcha'
import recaptcha from './j4b3r.jsx'

const Contact = () => {
  const [verified, setVerified] = useState(false)
  function onChange(value) {
    if (value) {
      setVerified(true)
    }
    setTimeout(() => {
      setVerified(false)
    }, 15000)
  }
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('jaberuiux', 'jaberuiux2023', form.current, '4_KIIVYcHy-qg8CZ1')
      .then(
        (result) => {
          toast.success('Message Sent Successfully!')
          form.current.reset()
        },
        (error) => {
          toast.error('Message Sending Failed !! Try Again Later !!')
          console.log(error.text)
        },
      )
  }

  return (
    <div className='max-w-[1440px] mx-auto px-[118px] flex h-[80vh] justify-center items-center'>
      <form
        ref={form}
        onSubmit={sendEmail}
        className='w-[430px] flex flex-col items-center p-2'
      >
        <input
          type='text'
          className='w-[430px] bg-[#0C0C0C] h-[56px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] mb-[20px]'
          placeholder='Name'
          name='name'
          id='name'
          required
        />
        <input
          type='text'
          className='w-[430px] bg-[#0C0C0C] h-[56px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] mb-[20px]'
          placeholder='Email'
          name='email'
          id='email'
          required
        />
        <input
          type='number'
          className='w-[430px] bg-[#0C0C0C] h-[56px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] mb-[20px]'
          placeholder='Phone'
          name='phone'
          id='phone'
          required
        />
        <textarea
          id='message'
          name='message'
          className='w-[430px] bg-[#0C0C0C] h-[195px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] py-[10px] mb-[20px]'
          placeholder='Message'
          required
        ></textarea>
        <ReCAPTCHA sitekey={recaptcha} onChange={onChange} />
        <button
          type='submit'
          value='Send'
          disabled={!verified}
          className='flex items-center justify-center border-2 border-[#373737] w-[168px] h-[65px] bg-[#141414] mt-5'
        >
          {!verified ? (
            <p className='text-[14px] text-[#BCBCBC] font-bold'>
              Verify Recaptcha
            </p>
          ) : (
            <p className='text-[24px] text-[#BCBCBC] font-bold'>SEND</p>
          )}
          <ArrowOutward />
        </button>
      </form>
    </div>
  )
}

export default Contact
