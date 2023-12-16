import { useNavigate } from 'react-router-dom'
import './header.css'
import Logo from '../logo/Logo';
import { useDispatch } from 'react-redux';
import { activeHeader } from '../../redux/features/header/headerSlice';
import { useAppSelector } from '../../redux/hooks';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggin = useAppSelector( state => state.header.isActive );

  const logout = () => {
    dispatch(activeHeader(false));
    localStorage.clear();
    navigate('/', {replace: true});
  }

  return (
    <>
      {
        isLoggin ?
        <header className='header'>
          <div className='logo-container'>
            <Logo />
          </div>
          <div className='button-container'>
            <button onClick={logout}>logout</button>
          </div>
        </header>
        :
        <header></header>
      }
    </>
  )
}

export default Header