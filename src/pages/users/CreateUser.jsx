import { useRef, useState } from "react"
import FormInput from "../../components/input/FormInput"
import { useAuth } from '../../contexts/AuthContext'

const CreateUser = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {createUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match.')
    }

    try {
      setError('')
      setLoading(true)

      const response = await createUser(emailRef.current.value, passwordRef.current.value)
      console.log(response.user.email);
    } catch (error) {
      console.log(error);
      setError('Failed to create an account.')
    }

    setLoading(false)
  }

  return (
    <>
      {error && alert(error)}
      <header className="page-header">Create user</header>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between gap-8">
          <FormInput refData={emailRef} label="Email" inputType="email" />
          <FormInput refData={passwordRef} label="Password" inputType="password" />
          <FormInput refData={passwordConfirmRef} label="Confirm Password" inputType="password" />
        </div>

        <div className="form-spacer"></div>

        <div className="flex gap-4 max-w-fit">
          <button type="submit" disabled={loading} className={`btn btn-primary ${loading ? 'cursor-not-allowed' : ''}`}>Create</button>
          <button className="btn border-[1px] hover:bg-slate-50">Cancel</button>
        </div>
      </form>
    </>
  )
}

export default CreateUser