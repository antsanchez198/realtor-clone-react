import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Offers from './pages/Offers'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CreateListing from './pages/CreateListing'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/sign-in" element={<Signin />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path='/create-listing' element={<PrivateRoute />}>
            <Route path="/create-listing" element={<CreateListing />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </>
  )
}

export default App
