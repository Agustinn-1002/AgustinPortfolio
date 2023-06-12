import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from "react";
import '../style/Header.css'
import MediaQuery from 'react-responsive'
import { bannerInfo } from '../../../Info/bannerData'


const Header = () => {
    const [data, setData] = useState(bannerInfo);
    const ancho = screen.width
    return (
        <header>
            <Carousel indicators={false} className='w-100'>
                {data.map((e, index) =>

                    <Carousel.Item key={index} interval={2000}>
                        <div>
                            <MediaQuery maxWidth={430}>
                                <img src={e.imageMobile} className="banner" alt="" />
                            </MediaQuery>
                            <MediaQuery minWidth={430}>
                            <img src={e.imageDesktop} className="banner" alt="" />
                            </MediaQuery>
                        </div>
                        <div className="info text-white">
                            <div className="textInfo">
                                <h3 className="fw-light subTitulo">{e.subTitulo}</h3>
                                <h1 className="fw-bold titulo">{e.titulo}</h1>
                                <p className="fst-italic descripcion">{e.descripcion}</p>
                            </div>
                            <button className="w-25">Ver Proyecto</button>
                        </div>
                    </Carousel.Item>

                )}
            </Carousel>
        </header>
    )
}

export default Header