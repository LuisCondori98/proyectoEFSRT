import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css"

const Cart = () => {

  const { cart, deleteProduct, totalQuantity } = useContext(CartContext);

  const deleteProducts = (id) => {

    Swal.fire({
      icon: "error",
      title: "Estas seguro de eliminar?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado", "", "success");
        deleteProduct(id);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  if(totalQuantity <= 0)
    {
      return ( 
        <div className="container-cart-empty">
          <img className="carrito" src={"/images/carrito.gif"} alt="" />
          <h4>Su carrito esta vacio</h4>
        </div>
        )
    }

  return (
    <div className="container-cart">
        {
          cart.map(prod => (
            <div className="cart-item" key={prod.id}>
              <img className="img-cart" src={`/images/${prod.img}`} alt="" />
              <div>
              <h4>{prod.banda}</h4>
              <h4>S/. {prod.precio}</h4>
              <h5 className="unidades">{prod.quantity} unidades</h5>
              </div>
              <button className="btn btn-danger" onClick={() => deleteProducts(prod.id)}>Eliminar</button>
            </div>
          ))
        }
    </div>
  )
}

export default Cart