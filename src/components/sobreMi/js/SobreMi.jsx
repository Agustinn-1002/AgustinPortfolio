import React from "react";
import '../style/SobreMi.css'
import profile from '../../../img/profile.png';
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import cv from '../../../Info/CV Agustin Pasten.pdf'


const SobreMi = () => {
    return (
        <div className="text-white container" id="SobreMi">
            <h2 className="linkSobreMi">SOBRE MI<div className="borderSUB"></div></h2>

            <div className="infoSobreMi mt-md-4 mx-auto d-flex flex-column flex-md-row align-items-center">
                <div className="d-flex flex-column align-items-center me-md-5">
                    <img src={profile} alt="" className="imgProfile mt-4" />
                    <a className="text-decoration-none text-white" href={cv} target="_blank"><button className="btnSobreMi mt-4">VER CV</button></a>
                </div>
                <div className="d-md-flex flex-md-column ms-xxl-5">
                    <div className="textSobreMi text-center text-md-start mt-5">
                        <p>Hola!!! mi nombre es Mauro Agustín Pasten, de Argentina, tengo 22 años y soy Desarrollador web Full Stack con experiencia en el diseño y maquetado de páginas.</p>
                        <p>Me identifico por ser una persona Proactiva y Autodidacta, ya que tengo la capacidad de aprender mucho más, con el fin de mejorar mis habilidades y conocimientos.</p>
                    </div>
                    <div className="contactSobreMi mt-4 mt-md-0 flex-md-nowrap">
                        <div className="lineSobreMi mb-3 mb-md-2 order-md-1"></div>
                        <div className="linksSobreMi text-center text-md-start order-md-2">
                            <a href="https://www.instagram.com/_aguspasten_/" target="_blank"><AiOutlineInstagram /><b className="infoRedes">@_aguspasten_</b></a>
                            <a href="https://www.linkedin.com/in/mauro-agustin-pasten-68a39b289/" target="_blank"><AiOutlineLinkedin /><b className="infoRedes">Agustinn-1002</b></a>
                            <a href="https://github.com/Agustinn-1002" target="_blank"><AiOutlineGithub /><b className="infoRedes">Mauro Agustin Pasten</b></a>
                        </div>
                        <div className="textContact text-center text-md-start mt-3 mt-md-0 order-md-0">
                            <p>Si estás buscando a un desarrollador web, apasionado y capacitado, no dude en ponerse en contacto conmigo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi;