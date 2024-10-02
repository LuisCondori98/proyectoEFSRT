import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <label className="navbar-brand" >Gamarucci</label>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } aria-current="page" to={"/"}>Inicio</NavLink>
            <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/productos"}>Productos</NavLink>
            <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/ubicanos"}>Ubicanos</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar