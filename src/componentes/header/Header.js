import NavBar from "./NavBar"
import './Header.css'
import { useLoginContext } from "../../context/LoginContext";


const Header = () => {

    const {user, logout} = useLoginContext()

    return (
        <div id="header">
            <NavBar/>
            <div>
                <small className="usuario">Bienvenido: {user.user}</small>
                <button onClick={logout} className=" btnLogout btn btn-outline-danger">Logout</button>
            </div>
        </div>
    )
}

export default Header