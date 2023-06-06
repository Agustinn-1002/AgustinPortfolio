import React, { useState } from "react";
import '../style/Proyectos.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerInfo } from '../../../Info/bannerData'

const Proyectos = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1070 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1070, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="proyectosContain" id='Proyectos'>
            <div className="container">
                <h2 className="linkPro">PROYECTOS<div className="borderPro"></div></h2>
                <Carousel responsive={responsive} swipeable={true} infinite={true} autoPlay={true} autoPlaySpeed={4000}>
                    {bannerInfo.map(e =>
                        <div className="mx-auto bg-white my-4 cardDataPro" style={{ borderRadius: '20px' }}>
                            <img src={e.imagePortada} className='w-100' style={{ borderRadius: '20px 20px 0 0' }} />
                            <div className="d-flex flex-column align-items-center justify-content-around ">
                                <div className="w-75 text-center my-3">
                                    <h1 className="tituloPro">{e.titulo}</h1>
                                    <h2 className="subTituloPro">{e.subTitulo}</h2>
                                </div>
                                <div className="mt-4 mb-4">
                                    <button className="btnProyects">VER WEB</button>
                                </div>
                            </div>
                        </div>
                    )}
                </Carousel>
                <div className="cardPrueba">
                    <div className="imagePrueba">
                        <img src={bannerInfo[0].imagePortada} />
                    </div>
                    <div className="detailsPrueba">
                        <div className="centerPrueba">
                            <h1>Someone famous<br /><span>team leader</span></h1>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                            <ul>
                                <li><a href="#"></a>facebook</li>
                                <li><a href="#"></a>twitter</li>
                                <li><a href="#"></a>linkedin</li>
                                <li><a href="#"></a>instagram</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyectos;