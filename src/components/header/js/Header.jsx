import React from "react";
import BanerOne from '../../../img/banerOne.png'
import mobileBannerOne from '../../../img/mobileBannerOne.png'
import '../style/Header.css'
import {bannerInfo} from '../../../Info/bannerData'

const Header = () => {
    const ancho = screen.width
    return(
        <header>
            <div className="container-md p-0">
                {ancho <= 430 ? 
                <img src={bannerInfo[0].imageMobile} className="banner" alt=""/>
                :
                <img src={bannerInfo[0].imageDesktop} className="banner" alt=""/>
                }
            </div>
            <div>
                <div>
                    <h3>{bannerInfo[0].subTitulo}</h3>
                    <h1>{bannerInfo[0].titulo}</h1>
                    <p>{bannerInfo[0].descripcion}</p>
                </div>
                <button>Ver Proyecto</button>
            </div>
        </header>
    )
}

export default Header