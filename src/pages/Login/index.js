import { Navigate } from 'react-router-dom'
import Form from '../../components/Form'

const Login = () => {
  const isAuth = JSON.parse(localStorage.getItem('isAuth'))

  return (
    <>
      {isAuth && <Navigate to="/" />}
      <div className="d-flex flex-column align-items-center text-center">
        <h2>Sign in to your account</h2>
        <Form />
      </div>
    </>
  )
}

export default Login
