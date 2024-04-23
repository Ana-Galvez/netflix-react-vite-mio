import '../styles/Nav.css';
import logo from '../../public/images/logo-netflix.png';
import avatar from '../../public/images/Netflix-avatar.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/' className='nav__a'>
        <img className='nav__logo' src={logo} alt="Logo de Netflix" />
      </Link>
      {/* <div className='nav__menu'>
        <ul>
          <a href="/">Home</a>
          <a href="/peliculas">Películas</a>
          <a href="/series">Series</a>
        </ul>
      </div> */}
      <Link to='/descripcionprueba' className='nav__a'>
        <img className='nav__avatar' src={avatar} alt="Avatar de usuario" />
      </Link>
    </div>
  )
}

export default Nav