import { useNavigate } from "react-router-dom";
import { publicRoutes } from "../../../routes/routes.service";

const RecuperarContrasenia = () => {
  const navigate = useNavigate();

  const volverAtras = () => { 
    navigate(`${publicRoutes.LOGIN}`, {replace: true});
  }

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Recuperar Contraseña
          </h2>

          <button
              className="flex w-full justify-center rounded-md bg-slate-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              onClick={() => volverAtras()}
            >
              Volver
            </button>
        </div>
      </div>
    </div>
  )
}

export default RecuperarContrasenia