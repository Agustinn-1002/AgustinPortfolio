import React, { useState } from "react";
import { bannerInfo } from '../../../Info/bannerData'
import '../style/Proyectos.css'
import Carousel from 'react-bootstrap/Carousel';

const Proyectos = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <section className="proyectosContain">
            <Carousel activeIndex={index} onSelect={handleSelect} className="w-75 p-5 ">
                {bannerInfo.map(e =>
                    <Carousel.Item className="bg-white" style={{borderRadius:'20px'}}>
                        <img src={e.imagePortada} className='w-100' style={{borderRadius:'20px 20px 0 0'}}/>
                        <div className="d-flex flex-column align-items-center justify-content-around ">
                            <div className="w-75 text-center">
                                <h1 className="tituloPro">{e.titulo}</h1>
                                <h2 className="subTituloPro">{e.subTitulo}</h2>
                            </div>
                            <div className="mt-5 mb-4">
                                <button className="btnProyects">VER WEB</button>
                            </div>
                        </div>
                    </Carousel.Item>
                )}
            </Carousel>
        </section>
    )
}

export default Proyectos;