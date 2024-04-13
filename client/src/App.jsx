import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Login2 from './pages/Login2'
import Dashboard from './pages/Dashboard'
import Courseworth from './pages/Courseworth'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-form' element={<Login2 />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/course-worth' element={<Courseworth />} />
      </Routes>
    </>
  )
}

export default App
