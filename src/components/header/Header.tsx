import { useNavigate } from 'react-router-dom'
import './header.css'
import Logo from '../logo/Logo';

const Header = () => {
  
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/', {replace: true});
  }

  return (
    <header className='header'>
      <div className='logo-container'>
        <Logo />
      </div>
      <div className='button-container'>
        <button onClick={logout}>logout</button>
      </div>
    </header>
  )
}

export default Header