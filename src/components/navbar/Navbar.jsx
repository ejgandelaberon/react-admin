import { Link } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import avatar from '../../assets/ejberon.jpeg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='flex flex-row justify-between'>
        <div className='flex pt-4'>
          <img src={avatar} alt=""/>
          <span className='user-title'>
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