import '../styles/Login.css';
import "../styles/NavLogin.css";
import logo from "../../public/images/logo-netflix.png";
import { useState } from 'react';
import IniciarSesion from './IniciarSesion';

const Login = () => {
  const [iniciarSesion, setIniciarSesion] = useState(false);

  return (
    <div className='login'>
      <div className="nav">
        <a href="/" className="nav__a__logo">
          <img className="nav__logo" src={logo} alt="Logo de Netflix" />
        </a>
          <button onClick={()=> setIniciarSesion(true)} className="nav__button">Iniciar sesión</button>
      </div>
      <div className="login__opacity"></div>
      <div className="login__text">
        {iniciarSesion ? (<IniciarSesion />) : (
      <>    
        <h1>Películas y series ilimitadas y mucho más</h1>
        <p className="login__text--cancel">Cancela cuando quieras.</p>
        <p className="login__text--mail">¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
        <div className="login__text--form">
          <form>
            <input type="email" name="" id="" placeholder='Email' />
            <button onClick={()=> setIniciarSesion(true)}>Comenzar</button>
          </form>
        </div>
      </>)}
      </div>
    </div>
  )
}

export default Login