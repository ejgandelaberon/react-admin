import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const Login = () => {
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
          <label htmlFor="">Username/Email</label>
          <input type="text" />
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