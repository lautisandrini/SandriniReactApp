import { createContext, useContext, useState } from "react";

export const LoginContext = createContext()

const usuarios = [
    {
        email: 'lautaro@sandrini.com',
        password: '1234'
    },
    {
        email: 'usuario@user.com',
        password: '1234'
    },
    {
        email: 'usuario2@user.com',
        password: '1234'
    }
]

export const LoginProvider = ({children}) => {

    const [user, setUser] = useState({
        user: '',
        logged: true,
    })

    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email)

        if (match) {
            if (match.password === values.pass) {
                setUser({
                    user: match.email,
                    logged: true
                })
            } else {
                alert("Contraseña incorrecta")
            }
        } else {
            alert ("Email Incorrecto")
        }
    }

    const logout = () =>{
        setUser({
            user: '',
            logged: false
        })
    }

    return (
        <LoginContext.Provider value={{user,login, logout}} > 
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}