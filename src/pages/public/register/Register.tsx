import { useNavigate } from "react-router-dom";
import { postRegister } from "../api/service"
import { useState } from "react";
import { publicRoutes } from "../../../routes/routes.service";

const Register = () => {

  const navigate = useNavigate();

  const [spinn, setSpinn] = useState(false);

  const register = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSpinn(true);
    const fields = Object.fromEntries(new FormData(e.target as HTMLFormElement))
    const field = {
      name: fields.name,
      email: fields.email,
      password: fields.password,
    }
    const resp = await postRegister(field);
    const response = await resp.json();
    console.log(response);
    setSpinn(false);
  }

  const volverAtras = () => {
    navigate(`${publicRoutes.LOGIN}`, {replace: true});
  }

  return (
    <div>
      <button onClick={() => volverAtras()}>Volver</button>
      <form onSubmit={register}>
        <span>Nombres</span>
        <input type="text" name="name" />
        <span>Correo</span>
        <input type="email" name="email" />
        <span>Password</span>
        <input type="password" name="password" />
        {
          spinn ?
          <p>Loading . . .</p>
          :
          <button type="submit">Registrar</button>
        }
      </form>
    </div>
  )
}

export default Register