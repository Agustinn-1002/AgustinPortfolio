import React from "react";
import '../style/Header.css'
import { bannerInfo } from '../../../Info/bannerData'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Header = () => {

    const properties = {
        duration: 3000,
        autoplay: true,
        transitionDuration: 500,
        arrows: true,
        infinite: true,
        easing: "ease",
        prevArrow: <button className="rowSlider">{'<'}</button>,
        nextArrow: <button className="rowSlider">{'>'}</button>
    
      };
    const ancho = screen.width
    return (
        <header >
            <Slide {...properties   }>
                {bannerInfo.map(e =>

                    <div className="p-0 banner">
                        <div className="info text-white">
                            <div className="textInfo">
                                <h3 className="fw-light subTitulo">{e.subTitulo}</h3>
                                <h1 className="fw-bold titulo">{e.titulo}</h1>
                                <p className="fst-italic descripcion">{e.descripcion}</p>
                            </div>
                            <button className="w-25">Ver Proyecto</button>
                        </div>
                        {ancho <= 430 ?
                            <img src={e.imageMobile} className="banner" alt="" />
                            :
                            <img src={e.imageDesktop} className="banner" alt="" />
                        }
                    </div>

                )}
            </Slide>
        </header>
    )
}

export default Header