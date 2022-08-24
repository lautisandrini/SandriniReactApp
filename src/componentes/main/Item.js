
const Item = ( {producto} ) => {

    const {id, nombre, precio} = producto

    return (
        <div className="productos">
            <h3>Nombre: {nombre}</h3>
            <h4>id: {id}</h4>
            <h4>Precio: {precio}</h4>
        </div>
    )
}

export default Item