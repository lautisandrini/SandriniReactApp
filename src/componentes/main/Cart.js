import { useContext } from "react"
import {CartContext} from "../../context/CartContext"
import {BsFillTrashFill} from'react-icons/bs'
const Cart = () => {

    const {cart, precioTotal, btnVaciar, removeItem} =useContext(CartContext)

    return(
        <div>
            <h2 className="subtitulo">Carrito de compras:</h2>
            <hr/>
            <h3 className="detailPrecio2">Precio total: ${precioTotal()}</h3>
            <h3 className="detailName2" > - Productos seleccionados:</h3>
            <hr/>
            { cart.map( (item) => (
                // aca armar un componenete CarItem mas presentable
                <div className="cartElement" key={item.id}>
                    <h4 className="detailName2">{item.nombre} :</h4>
                    <p className="detailPrecio">Precio: ${item.precio}</p>
                    <p className="detailStock">Cantidad: {item.cantidad}</p>

                    {/* no se porque el boton se ve envuelto en un fondo blanco */}
                    <button className="btnRemove2" onClick={()=> removeItem(item.id)}><BsFillTrashFill className="btnRemove btn btn-danger"/> Eliminar producto</button>
                    <hr/>

                </div>
            ) )}

            <div className="vaciarContainer">
                <button onClick={btnVaciar} className="btn btn-danger btnVaciar">Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart