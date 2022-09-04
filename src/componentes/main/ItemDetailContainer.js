import { useEffect, useState  } from "react"
import DatosStock from "../../helpers/DatosStock"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    useEffect(() => {
        DatosStock()
            .then( (res) => {
                setProducto(res)
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
