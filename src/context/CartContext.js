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

    return (
        <CartContext.Provider value={ {cart, addToCart, isInCart, cartQuantity, precioTotal, btnVaciar, removeItem} } >
            {children}
        </CartContext.Provider>

    )
}   

export const useCartContext = () => {
    return useContext(CartContext)
}






