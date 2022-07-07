import { NavLink } from 'react-router-dom'
import Divider from '../Divider'
import SidebarData from './SidebarData'
import logo from '../../assets/logo.svg'
import { IconContext } from 'react-icons'

const Sidebar = () => {
  return (
    <>
      <div className='fixed top-0 left-0 prm-bg text-white w-64 h-screen m-0 overflow-auto'>

        <header className='prm-bg fixed h-auto w-64'>
          <div className='flex pt-4'>
            <img src={logo} alt="" className='App-logo' />
            <span className='text-lg font-bold sec-text hover:text-sky-400 header-title'>REACT DASHBOARD</span>
          </div>
          <Divider />
        </header>

        <div className='h-[calc(100vh-8rem)] mt-28 ml-3 mr-3 mb-4 sec-text'>
          {
            SidebarData.map((item, index) => (
              <IconContext.Provider key={index} value={{ className: "mt-auto mb-auto text-xl" }}>
                <NavLink
                  key={index}
                  to={item.path}
                  className={`flex hover:text-sky-900 hover:bg-sky-400 mb-2 p-2 rounded-md transition-1 focus:outline-none`}
                  
                >
                  {item.icon}
                  <span className='ml-4'>{item.title}</span>
                </NavLink>
              </IconContext.Provider>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Sidebar