import React from "react";
import Logo from '../../../../public/Logo/Logo-Dark.png'
import '../style/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-contain">
                <img src={Logo} alt="logo agusdev marca" className="logo"/>
                <div className="nav-links">
                    <p>sobre mi</p>
                    <p>proyectos</p>
                    <p>habilidades</p>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;