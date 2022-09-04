
import './Main.css'
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from './ItemDetailContainer'


const Main = () => {
    return (
        <div>
            <h2 className='subtitulo'>Productos disponibles:</h2>
            <ItemListContainer/>
            <ItemDetailContainer idProducto={1}/>
        </div>
    )
}

export default Main