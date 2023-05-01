/**Pagina de Log In para ingresar el Usuario
 * Usuario: Admin, Contraseña: 1234
 * Primero se valida que el Usuario y la contraseña sean correctas a la Base de datos
 */

import { useNavigate } from "react-router-dom";
import { login } from "./service";

function LoginPage({onLogin}) {
const navigate = useNavigate();



    const handleSubmit = async event => {
        event.preventDefault()

try {
    await login({
        username: event.target.username.value,
        password: event.target.password.value,
    });
} catch (error) {
    console.log("error");
    window.alert("Error en el Inicio de Sesión. Revisa el Usuario o Contraseña")
    return;
}
     



 /**Se inicia sesion correctamente */
        onLogin(true);
        navigate('/')
    };

    /**Formulario de Inicio de Sesion */
    return (
        <div className="loginForm"> <center>
            <h1>Iniciar Sesión</h1>
            <h5>Ingresa tu usuario y tu contraseña y empieza a descubrir</h5><br/>
            <form onSubmit={handleSubmit}>
          <label>Usuario: <input name="username" type="text" placeholder="Usuario" defaultValue="admin" required/></label>
          <label>Contraseña: <input name="password" type="password" placeholder="Contraseña" required/> </label>
          <br/><br/>
         <label><input type="Checkbox" name="stillLogin" value="true"/>Mantener la Sesión Iniciada</label> 
          <br/><br/>
          <button type="submit">Iniciar Sesión</button>
            </form></center>

            
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default LoginPage;
