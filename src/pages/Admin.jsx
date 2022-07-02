import Sidebar from "../components/sidebar/Sidebar"
import Navbar from "../components/navbar/Navbar"
import Content from "../components/content/Content"

const Admin = () => {
  return (
    <>
      <div className='flex h-full'>
        <div className=''>
          <Sidebar />
        </div>
        <div className='flex-1 top-0'>
          <div className='flex-col h-screen'>
            <Navbar />
            <div className='page-container'>
              <Content />
              <footer className="relative bottom-0 text-center">
                <p  className='text-sky-800 mt-10'>
                &copy; EJ Beron 2022
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin