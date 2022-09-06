import React from 'react'
import { HashLink as Link} from 'react-router-hash-link'

export const Login = () => {
    return (
    <div className="flex-grow w-96 h-80 bg-c-malva ">
        <h5>Login</h5>
        <input type='text' name='usuario' value='' placeholder='user' />\
        <input type="password" name='contrasena' value='' placeholder='password' />
        <input type='submit' name='' value='Ingresar'  />
        <Link to='#'>¿Olvidaste tu contraseña?</Link>
    </div>
)
}
