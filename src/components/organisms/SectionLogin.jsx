import { useState } from 'react';
import Swal from 'sweetalert2'
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './SectionLogin.css'
function SectionLogin() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState ('')

    const handlerClick = (event) => {
        Swal.fire({
            title : "ALTA DE PRODUCTOS",
            text : `${username} : ${password}`,
            imageUrl : "https://www.flaticon.es/icono-gratis/cargando_3368863",
            imageHeight : 100,
        })
    }
    const handlerClickExit = (event) => {
        Swal.fire("Abandono de sesion existoso!");
    }
    return (
        <div id="login_section">
            <Field type="text" placeholder="Hugo.Luis" text="Username" val={username} fnVal={setUsername}/>
            <Field type="password" placeholder="Password" text="Password" val ={password} fnVal={setPassword}/>
            <Button title="Iniciar sesion" onclick={handlerClick} />
            <Button title="Abandonar Sesion" onclick={handlerClickExit} />
        </div> 
     );
}

export default SectionLogin;