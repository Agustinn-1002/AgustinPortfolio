import React from "react";
import BanerOne from '../../../img/banerOne.png'
import mobileBannerOne from '../../../img/mobileBannerOne.png'
import '../style/Header.css'
import { bannerInfo } from '../../../Info/bannerData'

const Header = () => {
    const ancho = screen.width
    return (
        <header>
            <div className="container-md p-0 banner">
                <div className="info text-white">
                    <div className="textInfo">
                        <h3 className="fw-light subTitulo">{bannerInfo[1].subTitulo}</h3>
                        <h1 className="fw-bold titulo">{bannerInfo[1].titulo}</h1>
                        <p className="fst-italic descripcion">{bannerInfo[1].descripcion}</p>
                    </div>
                    <button className="w-25">Ver Proyecto</button>
                </div>
                {ancho <= 430 ?
                    <img src={bannerInfo[1].imageMobile} className="banner" alt="" />
                    :
                    <img src={bannerInfo[1].imageDesktop} className="banner" alt="" />
                }
            </div>
        </header>
    )
}

export default Header