import React, { useState } from 'react'
import { ArrowOutward } from '../../Assets/Icons/ArrowOutward'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleLogin = async (event) => {
    event.preventDefault()
    const apiUrl = 'https://jaber-portfolio-server.vercel.app/auth'

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      if (response.ok) {
        const userData = await response.json()
        if (userData?.message === 'Authentication successful.') {
          localStorage.setItem('userData', JSON.stringify(userData))
          console.log('Redirecting to dashboard...')
          navigate('/dashboard/')
        }
      } else {
        console.error('Authentication failed')
      }
    } catch (error) {
      console.error('Error occurred:', error)
    }
  }

  return (
    <div className='h-[80vh] flex items-center justify-center'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[36px] font-bold text-center mb-[40px]'>
          ADMIN LOGIN
        </h1>
        <form
          className='w-[430px] flex flex-col items-center p-2'
          onSubmit={handleLogin}
        >
          <input
            type='text'
            className='w-[430px] bg-[#0C0C0C] h-[56px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] mb-[20px]'
            placeholder='Email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            className='w-[430px] bg-[#0C0C0C] h-[56px] border-[#373737] border focus:border-[#373737] text-[20px] px-[20px] mb-[20px]'
            placeholder='Password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type='submit'
            value='Send'
            className='flex items-center justify-center border-2 border-[#373737] w-[168px] h-[65px] bg-[#141414] mt-5 text-[24px] font-bold gap-2'
          >
            <p>Login</p>
            <ArrowOutward />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
