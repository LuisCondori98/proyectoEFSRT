import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import "./ItemDetail.css"

const ItemDetail = () => {

  const [prodItem, setProdItem] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const { addToCart, totalQuantity } = useContext(CartContext);
  const { itemId } = useParams()

  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await fetch('/database/productos.json')

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

    const productToAdd = {
      id: prodItem.id,
      banda: prodItem.banda,
      precio: prodItem.precio,
      quantity: quantity,
      img: prodItem.img
    }

    addToCart(productToAdd)

    Toastify({
      text: "agregado",
      className: "info",
      style: {
        background: "black",
      }
    }).showToast();
  }

  const Increment = () => {

    if(quantity < prodItem.stock) {

      setQuantity(quantity + 1)
    }
  }

  const Decrement = () => {

    if(quantity > 1 ){

      setQuantity(quantity - 1)
    }
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
            <div>
              <Link className="btn btn-dark" onClick={addCart}>Agregar al carrito</Link>
              <div style={{display: "flex", justifyContent: "center", gap: "20px", padding: "7px", alignItems: "center"}}>
                <button className="btn btn-outline-light" style={{border: "black solid"}} onClick={() => Decrement()}> ➖ </button>
                <h3>{quantity}</h3>
                <button className="btn btn-outline-light" style={{border: "black solid"}} onClick={() => Increment()}> ➕ </button>
              </div>
            </div>
          <div>
            <h4>Metodos de pago</h4>
            <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
              <img className="pagos" src={`/images/plin-logo.png`} alt="plin" />
              <img className="pagos" src={`/images/yape-logo.webp`} alt="yape" />
              <img className="pagos" src={`/images/visa.png`} alt="Visa" />
              <img className="pagos" src={`/images/mastercard.png`} alt="Mastercard" />
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default ItemDetail