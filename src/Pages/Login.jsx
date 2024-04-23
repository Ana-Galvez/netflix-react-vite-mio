import '../styles/Login.css';
import "../styles/NavLogin.css";
import logo from "../../public/images/logo-netflix.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import IniciarSesion from './IniciarSesion';

const Login = () => {
  const [iniciarSesion, setIniciarSesion] = useState(false);

  return (
    <div className='login'>
      <div className="nav">
        <Link to="/" className="nav__a__logo">
          <img className="nav__logo" src={logo} alt="Logo de Netflix" />
        </Link>
        <Link to="/descripcionprueba" className="nav__a__button">
          <button onClick={()=> setIniciarSesion(true)} className="nav__button">Iniciar sesión</button>
        </Link>
      </div>
      <div className="login__opacity"></div>
      <div className="login__text">
        {iniciarSesion ? (<IniciarSesion/>) : (null)}
        <h1>Películas y series ilimitadas y mucho más</h1>
        <p className="login__text--cancel">Cancela cuando quieras.</p>
        <p className="login__text--mail">¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
        <div className="login__text--form">
          <form>
            <input type="email" name="" id="" placeholder='Email' />
            <button onClick={()=> setIniciarSesion(true)}>Comenzar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login