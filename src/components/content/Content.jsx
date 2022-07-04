import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../pages/Home'
import Reports from '../../pages/Reports'
import CatRoute from '../../routes/CatRoute'

const Content = () => {
  return (
    <div className='page-container'>
      <Routes>
        <Route path='/' element={<Navigate to='home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='cats' element={<CatRoute/>}/>
        <Route path='reports' element={<Reports/>}/>
      </Routes>
    </div>
  )
}

export default Content