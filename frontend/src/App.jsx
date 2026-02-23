import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from './assets/pages/RegistrationPage/Registation'
import Login from './assets/pages/LoginPage/Login'
import Home from './assets/pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App