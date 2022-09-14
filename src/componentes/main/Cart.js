import { useContext } from "react"
import CartContext from "./CartContext"

const Cart = () => {

    const {cart} =useContext(CartContext)

    return(
        <div>
            <h2 className="subtitulo">Carrito de compras:</h2>
            <hr/>

            { cart.map( (item) => (
                // aca armar un componenete CarItem mas presentable
                <div className="cartElement" key={item.id}>
                    <h3 className="detailName2">{item.nombre} :</h3>
                    <p className="detailPrecio">Precio: {item.precio}</p>
                    <p className="detailStock">Cantidad: {item.cantidad}</p>
                    <hr/>

                </div>
            ) )}
        </div>
    )
}

export default Cart