import ItemCount from "./ItemCount"
import { useState } from "react";



const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState (0)

    const handleAgregar = () => {

        const itemToCart = {
            id: item.id,
            Nombre: item.nombre,
            Precio: item.precio,
            cantidad
        }


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
                <h4 className="detailPrecio">Precio: {item.precio}</h4>
                <ItemCount max={item.stock} counter={cantidad} setCounter={setCantidad} handleAgregar={handleAgregar}/>
            </div>
        </div>
    )

}

export default ItemDetail