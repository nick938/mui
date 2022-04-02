import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Login from '../Login/index'
import SignUp from '../Register/index'
import Home from '../Home'
import User from '../Home/User'
import Main from '../Home/Main/index'
import Header from '../../components/Header'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Science from '../Home/Science'
import Editor1 from '../Editor'
import axios from 'axios'
axios.defaults.withCredentials = true
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Main />} />
        <Route path='science' element={<Science />} />
        <Route path='cluture' element={<Science />} />
        <Route path='business' element={<Science />} />
        <Route path='ploitics' element={<Science />} />
        <Route path='opinion' element={<Science />} />
        <Route path='health' element={<Science />} />
        <Route path='style' element={<Science />} />
        <Route path='travel' element={<Science />} />
        <Route path='user' element={<User />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<SignUp />} />
      <Route path='editor' element={<Editor1 />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
function NotFound() {
  return <h1>不要瞎搞</h1>
}
