
import { useEffect, useState  } from "react"
import DatosStock from "../../helpers/DatosStock"
import ItemList from "./ItemList"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        DatosStock()
            .then( (res) => {
                setProductos(res)
            })
            .catch( (err) => {
                console.log(err)
            })
            .finally(() => {
            })
    }, [])

    return (
        <div>
            <ItemList productos= {productos}/>
        </div>
    )
}

export default ItemListContainer