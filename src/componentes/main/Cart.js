import { useContext } from "react"
import {CartContext} from "../../context/CartContext"
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";

const Cart = () => {

    const {cart} =useContext(CartContext)

    if (cart.length === 0) {
        return ( 
            <div className="vaciarContainer">
                <EmptyCart/>
            </div>
        )
    }
    
    return(
        <div>
            <CartList/>
        </div>
    )
}

export default Cart