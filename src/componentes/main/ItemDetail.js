import ItemCount from "./ItemCount"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'



const ItemDetail = ({item}) => {

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
                <ItemCount />
                <Button variant="danger" >Agregar al carrito</Button>
            </div>
        </div>
    )

}

export default ItemDetail