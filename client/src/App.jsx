import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Login2 from './pages/Login2'
import Dashboard from './pages/Dashboard'
import Courseworth from './pages/Courseworth'
import NotFound from './pages/NotFound'
import PrivateRoute from './components/routes/PrivateRoute'
import Signup from './pages/Signup'
import AiTutor from './pages/AiTutor'
import Testyourself from './pages/Testyourself'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-form' element={<Login2 />} />
        <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path='/course-worth' element={
            <PrivateRoute>
              <Courseworth />
            </PrivateRoute>
            } />
          <Route path='/ai-tutor' element={
            <PrivateRoute>
              <AiTutor />
            </PrivateRoute>
            } />
          <Route path='/test-yourself' element={
              <PrivateRoute>
                <Testyourself />
              </PrivateRoute>
            } />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
