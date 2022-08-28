import ItemCount from "./ItemCount"

const Item = ( {producto} ) => {

    const {nombre, precio} = producto

    return (
        <div className="productos">
            <h3>{nombre}</h3>
            <p>aca me gustaria poner una imagen o una card</p>
            <h4>Precio: {precio}</h4>
            <ItemCount/>
            <hr/>

        </div>
    )
}

export default Item