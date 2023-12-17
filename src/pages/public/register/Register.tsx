import { useNavigate } from "react-router-dom"
import { postRegister } from "../api/service"
import { useState } from "react"
import { publicRoutes } from "../../../routes/routes.service"
import { lineWobble } from 'ldrs'
import "./Register.css"

lineWobble.register()

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

    try {
      const resp = await postRegister(field);
      const response = await resp.json();
  
      if (response.statusCode >= 400) {
        setSpinn(false);
        throw new Error(response.message);
      }  else if (response.statusCode >= 500) {
        setSpinn(false);
        throw new Error(response.message);
      }
      alert('Usuario creado');
      setSpinn(false);
      volverAtras();
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  const volverAtras = () => { 
    navigate(`${publicRoutes.LOGIN}`, {replace: true});
  }

  return (
    <div className="content-container">
      <form
        className="disp content-center"
        onSubmit={register}
      >
        <div className="space-y-12 w-1/2 ">
          <div className="border-b pb-12">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Nombres
              </label>
              <div className="mt-2">
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
          </div>
        </div>
        {
          spinn ?
          <button
            className="flex w-1/2 justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 h-9 items-center"
          >
            <l-line-wobble
              size="180"
              stroke="5"
              bg-opacity="0.1"
              speed="1.75" 
              color="white"
            ></l-line-wobble>
          </button>
          :
          <div className="w-1/2">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 my-2"
            >
              Registrarme
            </button>
            <button
              className="flex w-full justify-center rounded-md bg-slate-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              onClick={() => volverAtras()}
            >
              Volver
            </button>
          </div>
        }
      </form>

    </div>
  )
}

export default Register