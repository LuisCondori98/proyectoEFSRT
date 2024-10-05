import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import "./Checkout.css"

const Checkout = () => {

  const {cart, total} = useContext(CartContext)

  let envio = 10

  return (
    <div>
      <section>
        <form action="/realizar-pago" method="POST">
          <label for="nombre">Nombre del titular</label>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre completo" required />

          <label for="tarjeta">Número de tarjeta</label>
          <input type="text" id="tarjeta" name="tarjeta" placeholder="1234 5678 9012 3456" required pattern="\d{16}" />

          <label for="vencimiento">Fecha de vencimiento</label>
          <input type="month" id="vencimiento" name="vencimiento" required />

          <label for="cvv">CVV</label>
          <input type="number" id="cvv" name="cvv" placeholder="123" required pattern="\d{3}" />

          <input type="submit" value="Realizar pago" />
      </form>
      </section>
      <h2 className="total" style={{backgroundColor: "rgb(251, 160, 42)", color: "white", padding: "7px"}}>El total es {total}</h2>
    </div>
  )
}

export default Checkout