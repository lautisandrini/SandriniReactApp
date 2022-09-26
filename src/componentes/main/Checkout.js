import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"

const Checkout = () => {

    const {cart, precioTotal} = useCartContext()

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

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const orden = {
            comprador: values,
            items: cart, 
            total: precioTotal()
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