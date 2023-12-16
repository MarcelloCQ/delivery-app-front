import { Navigate, Route, Routes } from "react-router-dom"
import { privateRoutes } from "../../routes/routes.service"

const Private = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigate to={privateRoutes.HOME} />} />
    </Routes>
  )
}

export default Private