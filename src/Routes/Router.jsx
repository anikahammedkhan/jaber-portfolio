import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Blogs from '../Pages/Blogs/Blogs'
import Error from '../Pages/Error/Error'
import Contact from '../Pages/Contact/Contact'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <Error /> },
    ],
  },
  { path: '*', element: <Error /> },
])

export default Router
