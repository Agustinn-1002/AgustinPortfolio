import React from "react";
import BanerOne from '../../../img/banerOne.png'
import '../style/Header.css'

const Header = () => {
    return(
        <header>
            <div className="container-md p-0">
                <img src={BanerOne} className="banner" alt=""/>
            </div>
        </header>
    )
}

export default Header