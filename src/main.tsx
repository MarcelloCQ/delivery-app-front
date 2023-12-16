import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './App'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './redux/store'
import 'ldrs/ring'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />,
  </Provider>
)
