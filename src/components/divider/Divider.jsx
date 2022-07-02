import { IoLogoReact } from 'react-icons/io5'

const Divider = () => {
  return (
    <div className="divider-wrap">
      <div className="sides ml-2"></div>
      <span className="divider-body"><IoLogoReact/></span>
      <div className="sides mr-2"></div>
    </div>
  )
}

export default Divider