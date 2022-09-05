import CardWidget from "./CartWidget"
import { Link } from 'react-router-dom'



const NavBar = () => {
    return(
        <div className="header-container">
            <Link to='/'><img alt= "" className="logoHeader" src="/assets/img/OmegaPower.png"></img></Link>
            <nav className="header-navbar">
                <Link to='category/creatinas'>Creatinas</Link>
                <Link to='category/aminoacidos'>Aminoacidos</Link>
                <Link to='category/proteinas'>Proteinas</Link>
            </nav>
            <CardWidget></CardWidget>
        </div>
    )
}

export default NavBar