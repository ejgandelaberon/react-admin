import { Outlet } from 'react-router-dom'
import RouteContainer from '../components/RouteContainer'
import Toolbar from '../components/Toolbar'
import { Link } from "react-router-dom"

const UserProfileRoute = () => {
  return (
    <>
      <Toolbar pageTitle={'User Profile'}>
        <Link to='' className="btn btn-primary">View Profile</Link>
        <Link to='edit' className="btn bg-lime-600 hover:bg-lime-500 text-white">Update Profile</Link>
      </Toolbar>
      <RouteContainer>
        <Outlet/>
      </RouteContainer>
    </>
  )
}

export default UserProfileRoute