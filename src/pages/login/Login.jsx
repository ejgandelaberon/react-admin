import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const nav = useNavigate()
  const login = () => {
    nav('/admin')
  }
  return (
    <div className='login-container'>
      <header>
        <div>
          <img src={logo} alt="" className='App-logo' />
          <span className='header-title'>REACT LOGIN</span>
        </div>
      </header>

      <div className='form-control'>
        <div className='form-group'>
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div className='form-group'>
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
      </div>
      <hr />
      <div className='p-4'>
        <button onClick={login} className='btn btn-primary btn-block'>
          Login
        </button>
      </div>
    </div>
  )
}

export default Login