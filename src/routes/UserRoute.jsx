import { Outlet, Link } from 'react-router-dom'
import RouteContainer from '../components/RouteContainer'
import Toolbar from '../components/Toolbar'

const UserRoute = () => {
  
  return (
    <>
      <Toolbar pageTitle={'Users'}>
        <Link to={''} className={`btn btn-primary`}>Users List</Link>
        <Link to={'create'} className={`btn bg-lime-600 hover:bg-lime-500 text-white`}>New User</Link>
      </Toolbar>

      <RouteContainer>
        <Outlet/>
      </RouteContainer>
    </>
  )
}

export default UserRoute