import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Inicio from "./components/pages/Inicio/Inicio"
import Productos from "./components/pages/Productos/Productos"
import Ubicanos from "./components/pages/Ubicanos/Ubicanos"

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/store" element={<Productos />}/>
        <Route path="/ubicanos" element={<Ubicanos />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
