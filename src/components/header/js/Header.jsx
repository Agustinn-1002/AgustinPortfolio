import React from "react";
import BanerOne from '../../../img/banerOne.png'
import '../style/Header.css'

const Header = () => {
    return(
        <header>
            <div className="container bannerOne">
                <img src={BanerOne} alt="" className="w-100"/>
            </div>
        </header>
    )
}

export default Header