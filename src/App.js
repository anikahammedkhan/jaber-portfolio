import './App.css'
import Router from './Routes/Router'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App
