import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'



const NavBar = () => {
    return(
        <div className="navBar-container">
            <Link to='/'><img alt= "" className="logoHeader" src="/assets/img/OmegaPower.png"></img></Link>
            <nav>
                <Link to='category/creatinas' className='linkNav'>Creatinas</Link>
                <Link to='category/aminoacidos' className='linkNav' >Aminoacidos</Link>
                <Link to='category/proteinas' className='linkNav' >Proteinas</Link>
            </nav>
            <CartWidget></CartWidget>
        </div>
    )
}

export default NavBar