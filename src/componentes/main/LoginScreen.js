import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";

const LoginScreen = () => {

    const {login} = useContext(LoginContext)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login({
            email, pass
        })
        
    }

    return(
        <div>
            <div className="navBar-container" id="header">
                <img alt= "" className="logoHeader" src="/assets/img/OmegaPower.png"></img>
                <h1 className="subtitulo">Suplementos deportivos Omega Power</h1>
            </div>
            <h2 className="detailDesc">Para continuar ingrese su Email y contraseña</h2>
            <form onSubmit={handleSubmit} className="container my-5">
                <p className="detailStock">E-mail:</p>
                <input className="form-control" type={'email'} value={email} onChange={handleEmailChange} />
                <hr/>
                <p className="detailStock">Contraseña:</p>
                <input className="form-control" type={'password'} value={pass} onChange={handlePassChange}/>
                <hr/>
                <div className="vaciarContainer">
                    <button type="submit" className="btn btn-danger btnVaciar">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginScreen