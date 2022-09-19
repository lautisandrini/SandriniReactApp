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
            <div>
                <h1>Suplementos Power Omega</h1>
            </div>
            <h2>Para continuar ingrese su Email y contraseña</h2>
            <form onSubmit={handleSubmit} className="container my-5">
                <input className="form-control" type={'email'} value={email} onChange={handleEmailChange} />
                <hr/>
                <input className="form-control" type={'password'} value={pass} onChange={handlePassChange}/>
                <button type="submit" className="btn btn-danger">Login</button>
            </form>
        </div>
    )
}

export default LoginScreen