import ItemCount from "./ItemCount"
import { useContext, useState } from "react";
import {CartContext} from "../../context/CartContext";
import { Link } from 'react-router-dom';
import {BsCart} from 'react-icons/bs'
import {AiOutlinePlusCircle} from 'react-icons/ai'



const ItemDetail = ({item}) => {

    const {addToCart, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState (0)

    const handleAgregar = () => {

        const itemToCart = {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad,
        }

        addToCart(itemToCart)
    }

    return (
        <div className="detailContainer">
            
            <div className="detail1">
                <h1 className="detailName">{item.nombre}</h1>
                <img className="detailImg" src={item.img}/>
            </div>
            <div className="detail2">
                <p className="detailDesc">{item.desc}</p>
                <p className="detailStock">Stock disponible: {item.stock} unidades</p>
                <h4 className="detailPrecio">Precio: ${item.precio}</h4>
                <hr/>
                {
                    isInCart(item.id) ? <div> <p className="info"> ¡Producto agregado al Carrito! </p> <Link to={'/'} className="btn btn-danger"> <AiOutlinePlusCircle/> Agregar mas productos</Link> <hr/> <Link to={'/cart'} className="btn btn-danger"> <BsCart/> Ir al carrito</Link> </div> : <ItemCount max={item.stock} counter={cantidad} setCounter={setCantidad} handleAgregar={handleAgregar}/>
                }
                
            </div>
        </div>
    )

}

export default ItemDetail