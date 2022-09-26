
import './Main.css'
import { useEffect, useState  } from "react"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom' 
import { Spinner } from "reactstrap"
import { db } from '../../firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        const productosRef = collection(db, 'Productos')
        const q = categoryId ? query(productosRef, where('category', '==', categoryId )) : productosRef

        getDocs(q)
            .then((resp)=>{
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )

                setProductos(productosDB)
            })
            .finally(()=>{
                setLoading(false)
            })
        
            
    }, [categoryId])

    return (
        <div>
            {
                loading ? 
                <div className="spinnerContainer"> <h2>Cargando</h2> <Spinner className="spinner"/> </div> 
                : 
                <div>
                    <h1 className='subtitulo'>Productos disponibles:</h1> <ItemList productos= {productos}/>
                </div>
            }
        </div>
    )
}

export default ItemListContainer