import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData')
    if (storedUserData) {
      setUser(JSON.parse(storedUserData))
    }
  }, [])

  const authInfo = {
    user,
    loading,
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default UserContext
