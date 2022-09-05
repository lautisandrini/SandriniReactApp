import { useEffect, useState  } from "react"
import DatosStock from "../../helpers/DatosStock"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const {productoId} = useParams()

    useEffect(() => {
        DatosStock()
            .then( (res) => {
                setProducto(res.find((prod) => prod.id === Number(productoId)) )
            })
            .catch( (err) => {
                console.log(err)
            })
            .finally(() => {
            })
    }, [])

    return (
        <div>
            <ItemDetail producto= {producto}/>
        </div>
    )
}

export default ItemDetailContainer
