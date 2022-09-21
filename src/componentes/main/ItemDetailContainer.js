import { useEffect, useState  } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
import { Spinner } from "reactstrap"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    const {itemId} = useParams()
    
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db, 'Productos', itemId)

        getDoc(docRef)
            .then((doc)=>{
                setItem({id: doc.id, ...doc.data()})
            })
            .finally( () => {
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
