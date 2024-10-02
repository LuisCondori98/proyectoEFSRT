import { Link } from "react-router-dom"
import "./Productos.css"
import { useEffect, useState } from "react";

const Productos = () => {

  const [database, setDatabase] = useState([]);

  useEffect(() => {
    fetch('/database/database.json')
      .then(response => response.json())
      .then(data => setDatabase(data))
  }, []);

  console.log(database)

  return (
    <div>
      <div className="container-productos">
        {
          database.map(prod => (
            <div className="item-producto">
              <div>
                <img className="img-producto" src={`/images/${prod.img}`} alt="" />
                <h4 className="band">Polo {prod.banda}</h4>
                <h5>S/. {prod.precio}</h5>
              </div>
              <div>
                <p className="description">{prod.description}</p>
                <button className="btn btn-dark w-100">Agregar</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Productos