import "../styles/NavLogin.css";
import logo from "../../public/images/logo-netflix.png";
import { Link } from "react-router-dom";

const NavLogin = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav__a__logo">
        <img className="nav__logo" src={logo} alt="Logo de Netflix" />
      </Link>
      <Link to="/descripcionprueba" className="nav__a__button">
        <button className="nav__button">Iniciar sesión</button>
      </Link>
    </div>
  );
};

export default NavLogin;
