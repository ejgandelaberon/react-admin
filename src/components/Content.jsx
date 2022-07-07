import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Reports from '../pages/Reports'
import Users from '../pages/users/Users'
import CatRoute from '../routes/CatRoute'

const Content = () => {
  return (
    <div className='bg-white mt-[5.5rem] ml-[17rem] mr-4 mb-4 p-4 min-h-[calc(100vh-6.5rem)] min-w-min h-auto prm-text rounded-md'>
      <Routes>
        <Route path='/' element={<Navigate to='home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='cats' element={<CatRoute/>}/>
        <Route path='reports' element={<Reports/>}/>
        <Route path='users' element={<Users/>}/>
      </Routes>
    </div>
  )
}

export default Content