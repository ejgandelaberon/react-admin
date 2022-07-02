import { useState } from 'react'
import { Link } from 'react-router-dom'
import Divider from '../divider/Divider'
import SidebarData from './SidebarData'
import logo from '../../assets/logo.svg'
import { IconContext } from 'react-icons'

const Sidebar = () => {
  const [sidebarMenu, setSidebarMenu] = useState({
    activeItem: '',
    items: SidebarData
  })
  const toggleActive = (index) => {
    setSidebarMenu({...sidebarMenu, activeItem: sidebarMenu.items[index]})
    console.log(index);
  }

  const setActive = (index) => {
    if (sidebarMenu.items[index] === sidebarMenu.activeItem) return 'active-item'
    // console.log(sidebarMenu.activeItem[index]);
    console.log(sidebarMenu.activeItem);
    return ''
  }

  return (
    <>
      <div className='sidebar'>

        <header>
          <div>
            <img src={logo} alt="" className='App-logo' />
            <span className='header-title'>REACT DASHBOARD</span>
          </div>
          <Divider />
        </header>

        <div className='sidebar-items'>
          {
            sidebarMenu.items.map((item, index) => (
              <IconContext.Provider key={index} value={{ className: "mt-auto mb-auto text-xl" }}>
                <Link key={index} to={item.path} className='hover:text-sky-900' onClick={() => toggleActive(index)}>
                  <li className={setActive(index)}>
                    {item.icon}
                    <span className='ml-4'>{item.title}</span>
                  </li>
                </Link>
              </IconContext.Provider>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Sidebar