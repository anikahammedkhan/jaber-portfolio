import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from '../Components/AdminNav/AdminNav'

const AdminLayout = () => {
  return (
    <div>
      <AdminNav />
      <Outlet />
    </div>
  )
}

export default AdminLayout
