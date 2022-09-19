import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs'
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext';

const CartWidget = () => {
    
    const {cartQuantity, cart } = useContext(CartContext)
    
    return (
        
        <div>
            <Link to='/cart' className={`widget ${cart.length > 0 ? 'widget-visible' :''}`}><BsFillCartFill className='carritoStyle'/><span className='span'>{cartQuantity()}</span></Link>
        </div>
        

    )
}

export default CartWidget