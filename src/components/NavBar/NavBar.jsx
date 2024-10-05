import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

const NavBar = () => {

  const {totalQuantity} = useContext(CartContext)

  // EFECTO NAVBAR AMPLIANDOSE PARA EL MOBILE
  const toggleMenu = () => {

    const sidebar = document.getElementById("sidebar");

    if (sidebar.style.width === "100%") {

      sidebar.style.width = "0";
    } else {

      sidebar.style.width = "100%";
    }
  }

  // OBTENGO EL OBJETO USER DEL LOCALSTORAGE
  let user = JSON.parse(localStorage.getItem("user"))

  return (
    <div className="container-navbar">
      <span style={{padding: "10px"}} class="menu-btn" onClick={() => toggleMenu()}>☰</span>
      <h1 to={"/"} className="title">GAMARUCCI</h1>
      {
        totalQuantity > 0 ?
        <div className="cart">
          <Link to={"/cart"} class="bi bi-cart4" style={{color: "black"}}></Link><h6>{totalQuantity}</h6>
        </div>
        :
        <Link to={"/cart"} class="bi bi-cart4 cart" ></Link>
      }
      {
        user ?
        <Link to={"/profile"} className="username">Hola, {user.username}!</Link>
        :
        <Link to={"/user"} class="bi bi-person user"></Link>
      }
      <nav id="sidebar" class="sidebar" style={{zIndex: "99"}}>
        <a href="javascript:void(0)" class="close-btn" onClick={() => toggleMenu()}>×</a>
        <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } aria-current="page" to={"/"}>Home</NavLink>
        <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/productos"}>Productos</NavLink>
        <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/coleccion"}>Coleccion</NavLink>
        <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/bands"}>Bands</NavLink>
        <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/new-arrivals"}>New Arrivals</NavLink>
        <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/contact"}>Contact</NavLink>
        <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/blog"}>Blog</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
