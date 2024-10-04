import { Link, useParams } from "react-router-dom"
import "./Productos.css"
import { useEffect, useState } from "react";

const Productos = () => {

  const [database, setDatabase] = useState([]);

  useEffect(() => {
    fetch('/database/database.json')
      .then(response => response.json())
      .then(data => setDatabase(data))
  }, []);

  return (
    <div>
      <div className="container-productos">
        {
          database.map(prod => (
            <div className="item-producto" data-aos="flip-up" key={prod.id}>
              <div>
                <img className="img-producto" src={`/images/${prod.img}`} alt="" />
              </div>
              <div style={{width: "30%"}}>
                <h4 className="band">Polo {prod.banda}</h4>
                <p className="description">{prod.description}</p>
                <Link to={`/productos/${prod.id}`} className="btn btn-dark w-100">ver detalle</Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Productos