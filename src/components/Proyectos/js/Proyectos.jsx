import React, { useState } from "react";
import '../style/Proyectos.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerInfo } from '../../../Info/bannerData'
import { AiOutlineClose } from "react-icons/ai";

import MediaQuery from 'react-responsive'


const Proyectos = () => {
    const [vewInfo, setVewInfo] = useState(false)
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1070 },
            items: 1
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
        <section className="proyectosContain" id='Proyectos' >
            <div className="container">
                <h2 className="linkPro">PROYECTOS<div className="borderPro"></div></h2>
                <MediaQuery maxWidth={1070}>
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
                </MediaQuery>
                <MediaQuery minWidth={1071}>

                        <Carousel responsive={responsive} swipeable={true} infinite={true} autoPlay={true} autoPlaySpeed={6000}>
                            {bannerInfo.map(e =>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="bg-white infoPru">
                                        <div className="d-flex flex-column align-items-center justify-content-around h-100 px-2">
                                            <div className="d-flex flex-column align-items-center">
                                                <h2 className="tituloPru">{e.titulo}</h2>
                                                <div className="linePru"></div>
                                                <h3 className="subtituloPru">{e.subTitulo}</h3>
                                            </div>
                                            <button className="btnInfoPru" onClick={() => setVewInfo(!vewInfo)}>Ver Mas</button>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    <div className="imgAndInfo">
                                        <div className={vewInfo ? "techInfoPru p-3" : 'disablePru p-3'}>
                                            <AiOutlineClose className="closeData" onClick={() => setVewInfo(!vewInfo)} />
                                            <div className="mb-2">
                                                {e.tecnologiasFront.length > 0 ?
                                                    <>
                                                        <p className="mb-1">Front-End</p>
                                                        {e.tecnologiasFront.map(e =>
                                                            <b>- {e} </b>
                                                        )}
                                                    </>
                                                    : null}
                                            </div>
                                            <div>
                                                {e.tecnologiasBack.length > 0 ?
                                                    <>
                                                        <p className="mb-1">Back-End</p>
                                                        {e.tecnologiasBack.map(e =>
                                                            <b>- {e} </b>
                                                        )}
                                                    </>
                                                    : null}
                                            </div>
                                            <button className="btnPru">Ver Proyecto</button>
                                        </div>
                                        <img src={e.imageDesktop} className="imagePru" alt="" />
                                    </div>
                                </div>

                            )}
                        </Carousel>
                </MediaQuery>
            </div>
        </section>
    )
}

export default Proyectos;