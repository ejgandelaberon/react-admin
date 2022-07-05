import { Link } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import avatar from '../../assets/ejberon.jpeg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <div className='user-title-group'>
          <img src={avatar} alt="User avatar"/>
          <span>
            EJ BERON | Web Dev
          </span>
        </div>

        <Link to='/login' className='logout-link'>
          Log Out
          <IconContext.Provider value={{ className: "mt-1 mb-auto text-md" }}>
            <span className='ml-1'><FaSignOutAlt/></span>
          </IconContext.Provider>
        </Link>
      </div>
    </div>
  )
}

export default Navbar