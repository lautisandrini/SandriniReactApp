
import './Main.css'
import { useEffect, useState  } from "react"
import DatosStock from "../../helpers/DatosStock"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom' 


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        DatosStock()
            .then( (res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((prod) => prod.category === categoryId) )
                }
            })
            .catch( (err) => {
                console.log(err)
            })
            .finally(() => {
            })
    }, [categoryId])

    return (
        <div>
            <h2 className='subtitulo'>Productos disponibles:</h2>
            <ItemList productos= {productos}/>
        </div>
    )
}

export default ItemListContainer