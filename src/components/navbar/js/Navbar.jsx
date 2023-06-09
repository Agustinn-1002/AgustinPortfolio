import React, { useEffect, useState } from "react";
import LogoDesktop from '../../../../public/Logo/Logo-Dark.png'

import '../style/Navbar.css'
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
    const [navActive, setNavActive] = useState(false)

    return (
        <nav className="navbarContein">
            <div className="container-md nav-contain">
                <img src={LogoDesktop} alt="logo agusdev marca" className="logo" />
                <div onClick={() => setNavActive(!navActive)} className="hamburger">
                    <AiOutlineMenu />
                </div>
                <div className={navActive ? "activeNav" : "disabledNav"}>
                    <div className='nav-links'>
                        <button onClick={() => setNavActive(!navActive)}>X</button>
                        <a className="text-decoration-none text-white" href="#SobreMi" onClick={() => setNavActive(false)}>sobre mi</a>
                        <a className="text-decoration-none text-white" href="#Proyectos" onClick={() => setNavActive(false)}>proyectos</a>
                        <a className="text-decoration-none text-white" href="#Habilidades" onClick={() => setNavActive(false)}>habilidades</a> 
                    </div>
                </div>
                <div onClick={() => setNavActive(false)} className={navActive ? "disableNavActive" : "disableNavDisable"}></div>

            </div>
        </nav>
    )
};

export default Navbar;