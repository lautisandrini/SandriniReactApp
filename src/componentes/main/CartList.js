import { useContext } from "react"
import {CartContext} from "../../context/CartContext"
import {BsFillTrashFill} from'react-icons/bs'
import { Link } from 'react-router-dom'
import {TbTrashX} from 'react-icons/tb'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {HiOutlineCurrencyDollar} from 'react-icons/hi'



const CartList = () => {

    const {cart, precioTotal, btnVaciar, removeItem} =useContext(CartContext)

    return(
        <div>
            <h2 className="subtitulo">Carrito de compras:</h2>
            <hr/>
            <div className="containerFin">
                <h3 className="detailPrecio">Precio total: ${precioTotal()}</h3>
                <Link to="/checkout" className="btn btn-danger btnTermina"> <HiOutlineCurrencyDollar/> Terminar compra</Link>
            </div>
            <h3 className="detailName3" > Productos seleccionados:</h3>
            <hr/>
            { cart.map( (item) => (
                // aca armar un componenete CarItem mas presentable
                <div className="cartElement" key={item.id}>
                    <h4 className="detailName2">{item.nombre} :</h4>
                    <p className="detailPrecio">Precio: ${item.precio}</p>
                    <p className="detailStock">Cantidad: {item.cantidad}</p>

                    <button className="btnRemove2" onClick={()=> removeItem(item.id)}><BsFillTrashFill className="btnRemove btn btn-danger"/> Eliminar producto</button>
                    <hr/>
                </div>
            ) )}

            <div className="vaciarContainer">
                <button onClick={btnVaciar} className="btnRemove3"><TbTrashX/> Vaciar Carrito</button>
            </div>

            <div className="vaciarContainer">
                <Link to={'/'} className="btn btn-danger btnRemove2"><AiOutlinePlusCircle/> Agregar mas productos</Link>
            </div>
            
            <div className="vaciarContainer">
                <Link to="/checkout" className="btn btn-danger btnTermina"> <HiOutlineCurrencyDollar/> Terminar compra</Link>
            </div>
            
        </div>
    )
}

export default CartList