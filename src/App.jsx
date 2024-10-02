import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Inicio from "./components/pages/Inicio/Inicio"
import Productos from "./components/pages/Productos/Productos"
import Cart from "./components/Cart/Cart"
import Coleccion from "./components/pages/Coleccion/Coleccion"
import Bands from "./components/pages/Bands/Bands"
import NewArrivals from "./components/pages/NewArrivals/NewArrivals"
import Contact from "./components/pages/Contact/Contact"
import Blog from "./components/pages/Blog/Blog"

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/productos" element={<Productos />}/>
        <Route path="/coleccion" element={<Coleccion />}/>
        <Route path="/bands" element={<Bands />}/>
        <Route path="/new-arrivals" element={<NewArrivals />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
