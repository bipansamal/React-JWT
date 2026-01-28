import { useState } from 'react'
import './assets/css/style.css'
import Main from './assets/components/Main'
import Register from './assets/components/Register'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import { BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<login />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
