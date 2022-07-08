import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FormInput from "../../components/input/FormInput"
import { useAuth } from '../../contexts/AuthContext'

export const UserUpdate = () => {
  const {currentUser, updateUserEmail, updatePassword, logout} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const nav = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    const promises = []
    setLoading(true)
    setError('')

    switch (e.target.id) {
      case 'email':
        if(email === currentUser.email) return setError('New email must be different from the current one.')
        promises.push(updateUserEmail(currentUser, email))
        Promise.all(promises).then(() => {
          nav('..')
        }).catch(() => {
          setError('Failed to update email.')
        }).finally(() => {
          setLoading(false)
        })
        break;

      case 'password':
        if(password !== passwordConfirm) return setError('Passwords do not match.')
        if(password) promises.push(updatePassword(currentUser, password))
        Promise.all(promises).then(() => {
          logout()
        }).catch(() => {
          setError('Failed to update password.')
        }).finally(() => {
          setLoading(false)
        })
        break;

      default:
        break;
    }
  }

  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)
  const handlePasswordConfirm = e => setPasswordConfirm(e.target.value)

  const clearEmail = () => setEmail('')
  const clearPassword = () => {
    setPassword('')
    setPasswordConfirm('')
  }

  return (
    <>
      {error && alert(error)}
      <header className="page-header">Edit User</header>
      
        <div className="flex flex-row gap-8">
          <form onSubmit={handleSubmit} className='grow' id="email">
            <div className="flex flex-col justify-between gap-8 border-2 border-sky-200 rounded-lg p-4">
              <FormInput valueData={email} onChangeData={handleEmail} label="New Email" inputType="email" />
              <div className="flex gap-4 max-w-fit">
                <button type="submit" disabled={loading} className={`btn btn-primary ${loading ? 'cursor-not-allowed' : ''}`}>Update</button>
                <button type="button" onClick={clearEmail} className="btn border-[1px] hover:bg-slate-50">Clear</button>
              </div>
            </div>
          </form>

          <form onSubmit={handleSubmit} className='grow' id="password">
            <div className="flex flex-col justify-between gap-8 border-2 border-sky-200 rounded-lg p-4">
              <div className="flex flex-col gap-4">
                <FormInput valueData={password} onChangeData={handlePassword} label="New Password" inputType="password" />
                <FormInput valueData={passwordConfirm} onChangeData={handlePasswordConfirm} label="Confirm Password" inputType="password" />
              </div>

              <div className="flex gap-4 max-w-fit">
                <button type="submit" disabled={loading} className={`btn btn-primary ${loading ? 'cursor-not-allowed' : ''}`}>Update</button>
                <button type="button" onClick={clearPassword} className="btn border-[1px] hover:bg-slate-50">Clear</button>
              </div>
            </div>
          </form>
        </div>
    </>
  )
}