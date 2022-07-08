import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import FormInput from '../../components/input/FormInput'
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)

      const response = await login(email, password)
      console.log(response.user.email)
      e.target.reset()
      nav('/admin')
    } catch (error) {
      console.log(error);
      setError(`Failed to sign in. \n${error}`)
    }

    setLoading(false)
  }

  return (
    <div className='flex items-center justify-center bg-gradient-to-r from-cyan-50 to-blue-300 h-screen min-h-fit'>
      {error && alert(error)}
      <div className='bg-white bg-opacity-40 h-auto w-[25rem] shadow-2xl rounded-xl'>
        <header className='relative h-20 w-auto p-2 rounded-t-xl'>
          <div className='absolute flex inset-0 w-fit h-fit m-auto'>
            <img src={logo} alt="" className='App-logo' />
            <span className='header-title text-2xl font-bold prm-text hover:text-sky-400 transition-1'>REACT LOGIN</span>
          </div>
        </header>

        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <FormInput valueData={email} onChangeData={e => setEmail(e.target.value)} label='Email' inputType='email' />
            <FormInput valueData={password} onChangeData={e => setPassword(e.target.value)} label='Password' inputType='password' />
          </div>
          
          <div className='p-4'>
            <button type='submit' disabled={loading} className={`btn btn-primary btn-block ${loading ? 'cursor-not-allowed' : ''}`}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login