import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import "./Checkout.css"

const Checkout = () => {

  // USANDO EL TOTAL DEL CONTEXTO DEL CARRITO
  const { total } = useContext(CartContext)
  const [envio, setEnvio] = useState(15)


  useEffect(() => {

    if (total >= 70) {

      setEnvio(0);
    } else {

      setEnvio(15);
    }
  }, [total]);

  // CREANDO UN VALOR NUMERICO RANDOM PARA EL TICKET DE COMPRA EXITOSA
  const numeroRan = Math.floor(Math.random() * 1000000000000)

  // ALERTA DE COMPRA EXITOSA CON SWEETALERT
  const pagar = (e) => {

    e.preventDefault()

    // LIBRERIA SWEETALERT
    Swal.fire({
      title: `Numero de ticket GC-${numeroRan}`,
      text: "Gracias por su compra",
      icon: "success"
    });

    // BORRANDO DEL LOCALSTORAGE EL CARRITO
    localStorage.removeItem("cart")
  }

  return (
    <div className="container-checkout">
      <section className="container-form-tarjeta">
        <form action="#" onSubmit={pagar}>
          <label for="nombre">Nombre del titular</label>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre completo" required />

          <label for="tarjeta">Número de tarjeta</label>
          <input type="number" id="tarjeta" name="tarjeta" placeholder="1234 5678 9012 3456" required pattern="\d{16}" />

          <label for="vencimiento">Fecha de vencimiento</label>
          <input type="month" id="vencimiento" name="vencimiento" required />

          <label for="cvv">CVV</label>
          <input type="number" id="cvv" name="cvv" placeholder="123" required pattern="\d{3}" />

          <input type="submit" value="Realizar pago" />
      </form>
      </section>
      <div className="total">
        <h5>Total: S/. {total}</h5>
        <h5>Envio: S/. {envio}</h5>
        <h4>El total es S/. {Math.floor(total + envio)}</h4>
      </div>
    </div>
  )
}

export default Checkout