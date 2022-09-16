import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs'
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext';

const CartWidget = () => {
    
    const {cartQuantity } = useContext(CartContext)
    
    return (
        
        <div>
            <Link to='/cart'><BsFillCartFill className='carritoStyle'/><span className='span'>{cartQuantity()}</span></Link>
        </div>
        

    )
}

export default CartWidget