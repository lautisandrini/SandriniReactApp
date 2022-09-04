import Card from 'react-bootstrap/Card';


const Item = ( {producto} ) => {

    return (
        <div className="itemStyle">
            <Card>
                <Card.Img className="img-card" variant="top" src={producto.img} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item