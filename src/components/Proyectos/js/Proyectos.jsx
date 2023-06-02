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
        <section className="proyectosContain">
            <Carousel responsive={responsive} containerClass="carousel-container" swipeable={true} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
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
        </section>
    )
}

export default Proyectos;