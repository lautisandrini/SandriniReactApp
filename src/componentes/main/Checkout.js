import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import {addDoc, collection, doc, getDocs, writeBatch, query, where, documentId} from 'firebase/firestore'
import { db } from '../../firebase/config'

const Checkout = () => {
    
    const {cart, precioTotal, terminarCompra} = useCartContext()

    const [values, setValues] = useState({
        nombre:'',
        email:'',
        direccion:'',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const orden = {
            comprador: values,
            items: cart, 
            total: precioTotal()
        }

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'Productos')

        const q = query(productosRef, where(documentId(),'in',cart.map(item => item.id)))

        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc)=> {
                            terminarCompra(doc.id)
                        })
                })
        } else {
            alert("Hay items sin stock disponibles")
        }

    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div>
            <h2 className="subtitulo">Checkout</h2>
            <hr/>
            <form className="container my-5" onSubmit={handleSubmit}>
                <input name="nombre" onChange={handleInputChange} value={values.nombre} type={'text'} className="my-3 form-control" placeholder="Ingresa tu nombre y apellido"/>
                <input onChange={handleInputChange} name="email" value={values.email} type={'email'} className="my-3 form-control" placeholder="Ingresa tu E-mail"/>
                <input onChange={handleInputChange} name="direccion" value={values.direccion} type={'text'} className="my-3 form-control" placeholder="Ingresa tu direccion"/>
                <button type="submit" className="btn btn-danger">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout