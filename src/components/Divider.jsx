import { IoLogoReact } from 'react-icons/io5'

const Divider = () => {
  const sides = 'flex-grow border-t border-sky-400'
  return (
    <div className="relative flex py-5 items-center">
      <div className={`${sides} ml-2`}></div>
      <span className="flex-shrink mx-4 text-sky-400"><IoLogoReact/></span>
      <div className={`${sides} mr-2`}></div>
    </div>
  )
}

export default Divider