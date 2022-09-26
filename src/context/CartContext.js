import { createContext, useContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2';


export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
  
      setCart([...cart,item])
  
    }
  
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id ))
    }

    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    }
  
    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const precioTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const btnVaciar = () => {
        Swal.fire({
            title: 'Estas seguro?',
            
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, vaciar carrito',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
          })
    }

    const terminarCompra = (id) => {
        Swal.fire({
            title: '¡Compra realizada con exito!',
            text: `Tu codigo de compra es: ${id}. Recibiras los detalles al mail`,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
          })
          setCart([])
    }

    return (
        <CartContext.Provider value={ {cart, addToCart, isInCart, cartQuantity, precioTotal, btnVaciar, removeItem, terminarCompra} } >
            {children}
        </CartContext.Provider>

    )
}   

export const useCartContext = () => {
    return useContext(CartContext)
}






