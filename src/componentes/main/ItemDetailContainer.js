import { useEffect, useState  } from "react"
import DatosStock from "../../helpers/DatosStock"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
import { Spinner } from "reactstrap"


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    const {itemId} = useParams()
    
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        DatosStock()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId) ))
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
        
    }, [])

    return (
        <div>
            {
                loading ? <div className="spinnerContainer"> <h2>Cargando</h2> <Spinner className="spinner"/> </div> : <ItemDetail item={item} />
            }           
        </div>
    )
}

export default ItemDetailContainer
