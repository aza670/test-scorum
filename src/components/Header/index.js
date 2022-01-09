import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const isAuth = JSON.parse(localStorage.getItem('isAuth'))
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('isAuth')
    navigate('/login', { replace: true })
  }

  return (
    <header className="navbar navbar-light bg-light">
      <div className="container p-2">
        <span className="navbar-brand mb-0 h1">Guess the card</span>
        {isAuth && (
          <button onClick={ logout } className="btn btn-primary" type="button">
            Logout
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
