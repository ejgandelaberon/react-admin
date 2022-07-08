import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import avatar from '../assets/ejberon.jpeg'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState('')
  const nav = useNavigate()

  const handleLogout = async () => {
    setError('')

    try {
      await logout()
      nav('/login')
    } catch (error) {
      setError(`Failed to log out. \n${error}`)
    }
  }
  return (
    <>
      {error && alert(error)}
      <div className='bg-white fixed top-0 right-0 w-[calc(100vw-256px)] ml-64 h-[4.5rem] shadow-md overflow-auto z-50'>
        <div className='flex flex-row justify-between pt-4'>
          <div className='flex min-w-fit'>
            <img className='h-10 rounded-full ml-3 mr-3' src={avatar} alt="User avatar"/>
            <span className='prm-text prm-hover mt-2 mr-3 transition-1 min-w-fit'>
              {currentUser ? currentUser.email : 'EJ Beron | Web Dev'}
            </span>
          </div>

          <button onClick={handleLogout} className='mr-3 mt-auto mb-2 flex prm-text prm-hover transition-1 min-w-fit focus:outline-none'>
            Log Out
            <IconContext.Provider value={{ className: "mt-1 mb-auto text-md pointer-events-none" }}>
              <span className='ml-1'><FaSignOutAlt/></span>
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar