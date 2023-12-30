import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AuthChecker = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Simulate asynchronous retrieval of user data from local storage
        const userData = await new Promise((resolve, reject) => {
          const data = localStorage.getItem('userData')
          if (data) {
            resolve(JSON.parse(data))
          } else {
            reject('User data not found')
          }
        })

        // Check if user data exists
        if (userData) {
          // User data exists, continue with the application
          return
        }
      } catch (error) {
        console.error('Error checking authentication:', error)
      }

      // Redirect to login page if user data is not found or an error occurs
      navigate('/admin-login', { replace: true })
    }

    // Call the function to check for authentication
    checkAuthentication()
  }, [location, navigate])

  return children // This component doesn't render anything
}

export default AuthChecker
