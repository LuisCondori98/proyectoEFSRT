import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {

  // let scrollpos = window.scrollY;

  // window.onscroll = function() {

  //   let currentScroll = window.scrollY;

  //   if (scrollpos > currentScroll) {

  //     document.getElementById("navbar").style.top = "0";
  //   } else {

  //     document.getElementById("navbar").style.top = "-100px";
  //   }
  //   scrollpos = currentScroll;
  // }

  return (
    <div>
      <Link to={"/"} className="title">GAMARUCCI</h1>
      <Link to={"/cart"} class="bi bi-cart4 cart" style={{fontSize: "35px", margin: "0 20px"}}></Link>
      <Link to={"/user"} class="bi bi-person user" style={{fontSize: "35px", margin: "0 20px"}}></Link>
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <label className="navbar-brand" ></label>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } aria-current="page" to={"/"}>Home</NavLink>
              <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/productos"}>Productos</NavLink>
              <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/coleccion"}>Coleccion</NavLink>
              <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/bands"}>Bands</NavLink>
              <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/new-arrivals"}>New Arrivals</NavLink>
              <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/contact"}>Contact</NavLink>
              <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/blog"}>Blog</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
