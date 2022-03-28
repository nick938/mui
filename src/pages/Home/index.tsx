import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems:'center'
      }}
    >
      <h1> HOME </h1>
      <Link to={'/login'}>login</Link>
      <Link to={'/register'}>register</Link>
    </div>
  )
}
