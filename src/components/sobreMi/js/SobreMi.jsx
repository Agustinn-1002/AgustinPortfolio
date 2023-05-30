import React from "react";
import '../style/SobreMi.css'
import profile from '../../../img/profile.png';

const SobreMi = () => {
    return (
        <div className="text-white container mt-5">
            <h2 className="linkSobreMi">SOBRE MI<div className="borderSUB"></div></h2>

            <div className="w-75 mx-auto d-flex flex-column align-items-center">
                <img src={profile} alt="" className="imgProfile mt-4" />
                <button className="btnSobreMi mt-4">VER CV</button>
                <div className="textSobreMi text-center mt-5">
                    Hola!!! mi nombre es Mauro Agustín Pasten, de Argentina, tengo 22 años y soy Desarrollador web Full Stack con experiencia en el diseño y maquetado de páginas.
                    <br />
                    <br />
                    Me identifico por ser una persona Proactiva y Autodidacta, ya que tengo la capacidad de aprender mucho más, con el fin de mejorar mis habilidades y conocimientos,.
                </div>
            </div>
        </div>
    )
}

export default SobreMi;