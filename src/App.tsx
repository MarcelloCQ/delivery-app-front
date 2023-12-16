import { createHashRouter } from 'react-router-dom'
import './App.css'
import Login from './pages/public/login/Login'
import Private from './pages/private/Private'
// import RoutesWithNotFound from './utils/RoutesWithNotFound'
import RoutesWithNotFoundAlternative from './utils/RoutesWithNotFoundAlternative'
import Register from './pages/public/register/Register'
import Home from './pages/private/Home'
import { privateRoutes, publicRoutes } from './routes/routes.service'

const routes = createHashRouter([
  {
    path: `${publicRoutes.LOGIN}`,
    element: <Login/>,
  },
  {
    path: `${privateRoutes.PRIVATE}`,
    element: <Private />
  },
  {
    path: `${publicRoutes.REGISTER}`,
    element: <Register />,
  },
  {
    path: `${privateRoutes.HOME}`,
    element: <Home />,
  },
  {
    path: '*',
    element: <RoutesWithNotFoundAlternative />,
    caseSensitive: false,
  }
])

export default routes
