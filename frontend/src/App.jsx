import React from 'react'
import Login from './login.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './signup.jsx'
import Home from './home.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>   
    </>
  )
}

export default App
