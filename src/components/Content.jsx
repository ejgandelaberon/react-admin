import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Reports from '../pages/Reports'
import CatRoute from '../routes/CatRoute'
import UserRoute from '../routes/UserRoute'
import Users from '../pages/users/Users'
import CreateUser from '../pages/users/CreateUser'
import PageNotFound from './PageNotFound'

const Content = () => {
  return (
    <div 
      className='mt-[5.5rem] ml-[17rem] mr-4 mb-4
      min-h-[calc(100vh-6.5rem)] min-w-min h-auto prm-text'
    >
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>

        <Route path='cats/*' element={<CatRoute/>}/>

        <Route path='reports' element={<Reports/>}/>

        <Route path='users' element={<UserRoute/>}>
          <Route index element={<Users/>}/>
          <Route path='create' element={<CreateUser/>}/>
        </Route>

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default Content