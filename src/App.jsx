// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

import AboutUs from './pages/AboutUs/AboutUs'
import Shop from './pages/Shop/Shop'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import NewProduct from './pages/NewProduct/NewProduct'
import EditProduct from './pages/EditProduct/EditProduct'
import Services from './pages/Services/Services'
import Blogs from './pages/Blogs/Blogs'
import NewBlog from './pages/NewBlog/NewBlog'
import BlogDetails from './pages/BlogDetails/BlogDetails'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/aboutUs"
          element={ <AboutUs user={user}/> }
        />
        <Route
          path="/Shop"
          element={ <Shop user={user}/> }
        />
        <Route
          path="/Shop/:productId"
          element={ <ProductDetails user={user}/> }
        />
        <Route
          path="/Shop/Edit/:productId"
          element={ <EditProduct user={user}/> }
        />
        <Route
          path="/Shop/newProduct"
          element={ <NewProduct user={user}/> }
        />
        <Route
          path="/Services"
          element={ <Services user={user}/> }
        />
        <Route
          path="/Blogs"
          element={ <Blogs user={user}/> }
        />
        <Route
          path="/Blogs/:blogId"
          element={ <BlogDetails user={user}/> }
        />
        <Route
          path="/Blogs/newBlog"
          element={ <NewBlog user={user}/> }
        />
      </Routes>
    </>
  )
}

export default App
