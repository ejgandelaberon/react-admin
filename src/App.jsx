import { Routes, Route, Navigate } from 'react-router-dom'
import Admin from './pages/Admin'
import Login from './pages/login/Login'
import PageNotFound from './components/PageNotFound'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route index element={<Navigate to='/admin'/>}/>
          <Route path='/admin/*' element={<PrivateRoute><Admin/></PrivateRoute>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
