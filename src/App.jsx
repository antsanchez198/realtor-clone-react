import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Offers from './pages/Offers'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/offers" element={<Offers/>}></Route>
        <Route path="/sign-in" element={<Signin/>}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
