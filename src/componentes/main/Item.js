import ItemCount from "./ItemCount"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ( {producto} ) => {

    return (
        <div className="itemStyle">
            <Card style={{ width: '18rem' }}>
                <Card.Img className="img-card" variant="top" src={producto.img} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <h3>
                        {producto.precio}
                    </h3>
                    <ItemCount/>
                    <Button variant="danger">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item