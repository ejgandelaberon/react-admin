import { useAuth } from "../../contexts/AuthContext"

const UserInfo = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <header className='page-header'>User Information</header>
      <p>
        Email: {currentUser && currentUser.email}
      </p>
      <p>
        UID: {currentUser && currentUser.uid}
      </p>
      <div className="form-spacer"></div>
      
    </>
  )
}

export default UserInfo