import { Link, Navigate, useNavigate } from "react-router-dom"
import "./User.css"

const User = () => {

  const navigate = useNavigate()

  const login = (e) => {

    e.preventDefault()

    console.log("ingreso")

    navigate("/")
  }

  return (
    <div>
      <form action="">
        <h2>Login</h2>
        <input type="email" placeholder="Ingrese correo" required/>
        <input type="password" placeholder="Contraseña" required/>
        <input type="submit" value="Ingresar" className="btn btn-primary" onClick={login}/>
        <Link to={"/register"}>Crear cuenta</Link>
      </form>
    </div>
  )
}

export default User