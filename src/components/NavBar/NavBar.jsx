import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

const NavBar = () => {

  const {totalQuantity} = useContext(CartContext)

  const toggleMenu = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "100%") {
      sidebar.style.width = "0";
    } else {
      sidebar.style.width = "100%";
    }
  }
  

  return (
    <div className="container-navbar">
        <span style={{padding: "10px"}} class="menu-btn" onClick={() => toggleMenu()}>☰</span>
        <h1 to={"/"} className="title">GAMARUCCI</h1>
        {
         totalQuantity > 0 ?
         <div className="cart">
           <Link to={"/cart"} class="bi bi-cart4" style={{color: "black"}}></Link><h6 style={{color: "black"}}>{totalQuantity}</h6>
         </div>
         :
         <Link to={"/cart"} class="bi bi-cart4 cart" ></Link>
        }
      <Link to={"/user"} class="bi bi-person user"></Link>
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
    // <div className="container-navbar">
    //   <h1 to={"/"} className="title">GAMARUCCI</h1>
    //   {/* <Link to={"/cart"} class="bi bi-cart4 cart" style={{fontSize: "35px", margin: "0 20px"}}></Link> */}
    //   {
    //     totalQuantity > 0 ?
    //     <div className="cart">
    //       <Link to={"/cart"} class="bi bi-cart4" style={{color: "black"}}></Link><h6 style={{color: "black"}}>{totalQuantity}</h6>
    //     </div>
    //     :
    //     <Link to={"/cart"} class="bi bi-cart4 cart" ></Link>
    //   }
    //   <Link to={"/user"} class="bi bi-person user"></Link>
    //   <nav className="navbar navbar-expand-lg" id="navbar">
    //     <div className="container-fluid">
    //       <label className="navbar-brand" ></label>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //         <div className="navbar-nav">
    //           <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } aria-current="page" to={"/"}>Home</NavLink>
    //           <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/productos"}>Productos</NavLink>
    //           <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/coleccion"}>Coleccion</NavLink>
    //           <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/bands"}>Bands</NavLink>
    //           <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/new-arrivals"}>New Arrivals</NavLink>
    //           <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/contact"}>Contact</NavLink>
    //           <NavLink className={({isActive}) => isActive? "nav-link link-active" : "nav-link" } to={"/blog"}>Blog</NavLink>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  )
}

export default NavBar
