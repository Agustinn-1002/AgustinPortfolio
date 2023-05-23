import React, { useState } from "react";
import Logo from '../../../../public/Logo/Logo-Dark.png'
import '../style/Navbar.css'
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
    const [navActive , setNavActive] = useState(false)
    return (
        <nav className="navbarContein">
            <div className="container-md nav-contain">
                <img src={Logo} alt="logo agusdev marca" className="logo"/>
                <div onClick={()=>setNavActive(!navActive)} className="hamburger">
                    <AiOutlineMenu/>
                </div>
                <div className={navActive?"active":"disabled"}>
                    <div className='nav-links'>
                        <button onClick={()=>setNavActive(!navActive)}>X</button>
                        <p>sobre mi</p>
                        <p>proyectos</p>
                        <p>habilidades</p>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;