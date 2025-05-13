import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import Showbooks from './Features/Showbooks'
import Addbook from './Features/Addbook'
import Error from './pages/Error'
import Editbook from './Features/Editbook'
import Footer from './layout/Footer'

function App() {

  return (
    <div className='sm:max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/show-books' element={<Showbooks/>} ></Route>
        <Route path='/add-book' element={<Addbook/>} ></Route>
        <Route path='/edit-book' element={<Editbook/>} ></Route>
        <Route path='*' element={<Error/>} ></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
