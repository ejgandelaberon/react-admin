import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FormInput from "../../components/input/FormInput"
import { useAuth } from '../../contexts/AuthContext'

const CreateUser = () => {
  const {createNewUser} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const nav = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    if(password !== passwordConfirm) {
      return setError('Passwords do not match.')
    }

    try {
      setError('')
      setLoading(true)

      const response = await createNewUser(email, password)
      console.log(response.user);
      clearForm()
    } catch (error) {
      console.log(error);
      setError('Failed to create an account.')
    }

    setLoading(false)
  }

  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)
  const handlePasswordConfirm = e => setPasswordConfirm(e.target.value)

  const clearForm = () => {
    setEmail('')
    setPassword('')
    setPasswordConfirm('')
  }

  return (
    <>
      {error && alert(error)}
      <header className="page-header">Create user</header>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between gap-8">
          <FormInput valueData={email} onChangeData={handleEmail} label="Email" inputType="email" />
          <FormInput valueData={password} onChangeData={handlePassword} label="Password" inputType="password" />
          <FormInput valueData={passwordConfirm} onChangeData={handlePasswordConfirm} label="Confirm Password" inputType="password" />
        </div>

        <div className="form-spacer"></div>

        <div className="flex gap-4 max-w-fit">
          <button type="submit" disabled={loading} className={`btn btn-primary ${loading ? 'cursor-not-allowed' : ''}`}>Create</button>
          <button type="button" onClick={clearForm} id="clear" className="btn border-[1px] hover:bg-slate-50">Clear Form</button>
          <button type="button" onClick={() => nav('..')} className="btn border-[1px] hover:bg-slate-50">Cancel</button>
        </div>
        
      </form>
    </>
  )
}

export default CreateUser