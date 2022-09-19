
import {Link} from 'react-router-dom';

const EmptyCart = () => {

    return(
        <div className="vaciarContainer">
            <h2 className="subtitulo">¡El carrito esta vacio!</h2>
            <hr/>
            <Link to="/" className="btn btn-danger btnVaciar">Ver Productos</Link>
        </div>
    )
}

export default EmptyCart