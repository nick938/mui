import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from '../Login/index'
import SignUp from '../Register/index'
export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<SignUp />} />
      </Routes>
    </div>
  )
}
