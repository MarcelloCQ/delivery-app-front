import { NavLink, useNavigate } from "react-router-dom"
import { postLogin } from "../api/service";
// import { LoginPost } from "../api/post.interface";
import { useState } from "react";
import { privateRoutes, publicRoutes } from "../../../routes/routes.service";
import { useDispatch } from 'react-redux'
import { createUser } from "../../../redux/features/user/userSlice";
import { activeHeader } from "../../../redux/features/header/headerSlice";
import { lineWobble } from 'ldrs'

lineWobble.register()

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const [spinn, setSpinn] = useState(false);
  
  const login = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSpinn(true);

    const fields = Object.fromEntries(new FormData(e.target as HTMLFormElement));

    const field = {
      email: fields.email,
      password: fields.password,
    }

    const resp = await postLogin(field);
    const response = await resp.json();
    
    if (response.statusCode >= 400) {
      setSpinn(false);
      return alert(response.message);
    } else if (response.statusCode >= 500) {
      setSpinn(false);
      return alert(response.message);
    } else if (response.email) {
      setSpinn(false);
      dispatch(createUser(response));
      dispatch(activeHeader(true));
      navigate(`${privateRoutes.PRIVATE}`, {replace: true})
    }
  }
  
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            FAZT APP
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={login} method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
                <div className="text-sm">
                  <NavLink to={publicRoutes.RECUPERARCONTRASENIA} className="font-semibold text-red-600 hover:text-red-500">
                    Olvidaste tu contraseña?
                  </NavLink>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>

            <div>
              {
                spinn ?
                <button
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 h-9 items-center"
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
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Autentificar
                </button>
              }
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Aún no te registras? {' '}
            <NavLink to={publicRoutes.REGISTER} className="font-semibold leading-6 text-red-600 hover:text-red-500">
              Hazlo ahora y obtén un regalo
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login