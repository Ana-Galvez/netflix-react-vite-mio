import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css'

function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="icons">
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
                <div className="table-container">
                    <div>
                        <ul>
                            <li><a href="#">Audio descriptivo</a></li>
                            <li><a href="#">Relaciones con inversores</a></li>
                            <li><a href="#">Avisos legales</a></li>
                            <li className="netflix">2024 clon_netflix Grupo 9</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Centro de ayuda</a></li>
                            <li><a href="#">Empleo</a></li>
                            <li><a href="#">Preferencias de cookies</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Tarjetas de regalo</a></li>
                            <li><a href="#">Términos de uso</a></li>
                            <li><a href="#">Información corporativa</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Prensa</a></li>
                            <li><a href="#">Privacidad</a></li>
                            <li><a href="#">Contáctanos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;