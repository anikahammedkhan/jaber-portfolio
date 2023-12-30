import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const storedUserData = localStorage.getItem('userData')
  useEffect(() => {
    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData)
        if (
          parsedUserData &&
          typeof parsedUserData === 'object' &&
          parsedUserData.hasOwnProperty('uuid')
        ) {
          setUser(parsedUserData)
        } else {
          localStorage.removeItem('userData')
          setUser(null)
        }
      } catch (error) {
        console.error('Error parsing user data:', error)
        localStorage.removeItem('userData')
        setUser(null)
      }
    }
    setLoading(false)
  }, [storedUserData])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}
export default UserContext
