import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Blogs from '../Pages/Blogs/Blogs'
import Error from '../Pages/Error/Error'
import Contact from '../Pages/Contact/Contact'
import Login from '../Pages/Login/Login'
import Dashboard from '../Pages/Admin/Dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import AdminLayout from '../Layout/AdminLayout'
import BlogsA from '../Pages/Admin/Blogs/Blogs'
import CreateBlog from '../Pages/Admin/Form/CreateBlog'
import CreateProject from '../Pages/Admin/Form/CreateProject'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/contact', element: <Contact /> },
      { path: '/admin-login', element: <Login /> },
      { path: '*', element: <Error /> },
    ],
  },
  {
    path: '/dashboard',
    element: (
      // <PrivateRoute>
      //   <AdminLayout/>
      // </PrivateRoute>
      <AdminLayout />
    ),
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/dashboard/works', element: <Dashboard /> },
      { path: '/dashboard/blogs', element: <BlogsA /> },
      { path: '/dashboard/create-blog', element: <CreateBlog /> },
      { path: '/dashboard/create-project', element: <CreateProject /> },
      { path: '*', element: <Error /> },
    ],
  },
])

export default Router
