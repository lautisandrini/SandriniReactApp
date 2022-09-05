import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


const Item = ( {producto} ) => {

    return (
        <div className="itemStyle">
            <Card>
                <Card.Img className="img-card" variant="top" src={producto.img} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Link to={`/item/${producto.id}`} className="btn btn-danger">Ver detalles del producto</Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item