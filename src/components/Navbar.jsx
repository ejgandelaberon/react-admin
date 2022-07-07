import { Link } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import avatar from '../assets/ejberon.jpeg'

const Navbar = () => {
  return (
    <div className='bg-white fixed top-0 right-0 w-[calc(100vw-256px)] ml-64 h-[4.5rem] shadow-md overflow-auto z-50'>
      <div className='flex flex-row justify-between pt-4'>
        <div className='flex min-w-fit'>
          <img className='h-10 rounded-full ml-3 mr-3' src={avatar} alt="User avatar"/>
          <span className='prm-text prm-hover mt-2 mr-3 transition-1 min-w-fit'>
            EJ BERON | Web Dev
          </span>
        </div>

        <Link to='/login' className='mr-3 mt-auto mb-2 flex prm-text prm-hover transition-1 min-w-fit border-focus'>
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