import ItemCount from "./ItemCount"
import Button from 'react-bootstrap/Button';


const ItemDetail = (producto) => {

    return (
        <div className="">
            <h1>{producto.nombre}</h1>
            <img src={producto.img}></img>
            <p>{producto.desc}</p>
            <p>{producto.stock}</p>
            <h2>{producto.precio}</h2>
            <ItemCount/>
            <Button variant="danger" >Agregar al carrito</Button>
        </div>
    )

}

export default ItemDetail