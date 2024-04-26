import { useRef } from 'react';
import { auth } from '../features/firebase';
import '../styles/IniciarSesion.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const IniciarSesion = () => {
  const emailRef = useRef();
  const contrasenaRef = useRef();

  const iniciarSesionBoton = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, contrasenaRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  const registroNuevo =()=>{
    createUserWithEmailAndPassword(auth,emailRef.current.value, contrasenaRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      }).catch ((err)=> alert(`El Mail ya existe = ${err.code}`));
  }

  return (
    <div className='iniciarSesion'>
      <form action="">
        <h1>Inicia sesión</h1>
        <input ref={emailRef} type="email" placeholder='Email'/>
        <input ref={contrasenaRef} type="password" placeholder='Contraseña'/>
        <button type='submit' onClick={iniciarSesionBoton}>Iniciar sesión</button>
      </form>
      <h4><span className='iniciarSesion__spanTexto'>¿Primera vez en Netflix?</span> <span className='iniciarSesion__spanLink' onClick={registroNuevo}>Suscríbete ahora.</span></h4>
    </div>
  )
}

export default IniciarSesion