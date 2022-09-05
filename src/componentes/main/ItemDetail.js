import ItemCount from "./ItemCount"
import Button from 'react-bootstrap/Button';



const ItemDetail = ({item}) => {

    return (
        <div className="">
            
            <h1>{item.nombre}</h1>
            <img src={item.img}/>
            <p>{item.desc}</p>
            <p>Stock disponible: {item.stock} unidades</p>
            <h4>Precio: {item.precio}</h4>
            <ItemCount/>
            <Button variant="danger" >Agregar al carrito</Button>
            
        </div>
    )

}

export default ItemDetail