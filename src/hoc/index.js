import { Navigate } from 'react-router-dom'

const Private = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem('isAuth'))

  if (!isAuth) {
    return <Navigate to="/login" />
  }

  return <div>{children}</div>
}

export default Private
