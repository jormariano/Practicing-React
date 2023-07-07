// Clase 8 - 1h 35'. Render Props. Es un patron de diseño como las HOC (High Order Component).
import { useState } from 'react'
import InicioSesion from './InicioSesion'
import LoginButton from './LoginButton'

const Login = () => {
    const [usuario, setUsuario] = useState(null);

    const manejadorLogin = () => {
        setUsuario("Jorgelina");
    }

    return (
        <div>
            {
                usuario ? <InicioSesion nombre={usuario}/> : <LoginButton loguear={manejadorLogin}/>
            }
        </div>
    )
}

export default Login