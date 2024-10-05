import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {

  const navigate = useNavigate()

  const logout = () => {

    localStorage.removeItem("user")

    navigate("/")
  }

  return (
    <div>
      <Link className='btn btn-danger' onClick={() => logout()}>Cerrar sesion</Link>
    </div>
  )
}

export default Profile