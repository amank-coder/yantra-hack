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
import Loginteacher from './pages/Loginteacher'
import Teacherdashboard from './pages/Teacherdashboard'
import AllCourses from './pages/AllCourses'
import MyCoursesPage from './pages/MyCoursesPage'
import VerifyOtpPage from './pages/Verify'
import AboutUsPage from './pages/AboutUsPage'
import { UserData } from './context/UserContext'
import CourseDescription from './pages/CourseDescription'
import CourseStudy from './pages/CourseStudy'

function App() {
  const {isAuth, user} = UserData()
  console.log("user",user)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-form' element={<Login2 />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login-teacher' element={<Loginteacher />} />
        <Route path='/teacher-dashboard' element={<Teacherdashboard />} />

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
          <Route path='/all-courses' element={<AllCourses />} />
          <Route path='/my-courses' element={<MyCoursesPage />} />
          <Route path='/verify-otp' element={<VerifyOtpPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/course/:id' element={<CourseDescription />} />
          <Route path='/course/study/:id' element={<CourseStudy user={user} />} />
      </Routes>
    </>
  )
}

export default App
