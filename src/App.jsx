import { Routes, Route, Navigate } from 'react-router-dom'
import Admin from './pages/Admin'
import Login from './pages/login/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/admin'/>}/>
        <Route path='/admin/*' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
