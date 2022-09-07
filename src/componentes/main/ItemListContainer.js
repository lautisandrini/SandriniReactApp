
import './Main.css'
import { useEffect, useState  } from "react"
import DatosStock from "../../helpers/DatosStock"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom' 
import { Spinner } from "reactstrap"



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

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
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            {
                loading ? <div className="spinnerContainer"> <h2>Cargando</h2> <Spinner className="spinner"/> </div> : <ItemList productos= {productos}/>
            }
        </div>
    )
}

export default ItemListContainer