import { useEffect, useState  } from "react"
import DatosStock from "../../helpers/DatosStock"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    const {itemId} = useParams()
    
    useEffect(() => {
        DatosStock()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId) ))
            })
            .catch(err => console.log(err))
        
    }, [])

    return (
        <div>
            
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer
