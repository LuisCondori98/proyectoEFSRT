import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import "./ItemDetail.css"

const ItemDetail = () => {

  const [prodItem, setProdItem] = useState(null)
  const { addToCart } = useContext(CartContext);
  const { itemId } = useParams()
  
  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await fetch('/database/database.json')

        const data = await response.json()

        const item = data.find(p => p.id === Number(itemId))

        if (item) {

          setProdItem(item)
        } else {

          throw new Error('Item no encontrado')
        }
      } catch (err) {

        setError(err.message)
      } finally {

        setLoading(false)
      }
    }

    fetchData()
    
  }, [itemId])

  const addCart = () => {

    addToCart(prodItem)

    Toastify({
      text: "agregado al carrito",
      className: "info",
      style: {
        background: "black",
      }
    }).showToast();
  }

  return (
    <div>
      {
      prodItem 
      && 
      <div className="item-detail-prod">
        <div>
          <img className="item-detail" src={`/images/${prodItem.img}`} alt=""/>
        </div>
        <div className="container-desc">
          <h3 className="desc"><strong>{prodItem.description}</strong></h3>
          <h3>Precio: S/. {prodItem.precio} <i class="bi bi-cash" style={{color: "green", fontSize: "30px"}}></i></h3>
          <Link className="btn btn-dark" onClick={addCart}>Agregar al carrito</Link>
        </div>
      </div>
      }
    </div>
  )
}

export default ItemDetail