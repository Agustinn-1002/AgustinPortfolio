import React from "react";
import {techs} from '../../../Info/tech.js'
import '../style/Habilidades.css'

const Habilidades = () => {
    return (
        <div className="w-100 container" id="Habilidades">
            <h2 className="linkSobreMi text-white">HABILIDADES<div className="borderSUB"></div></h2>
            <div className="row row-cols-auto d-flex justify-content-center py-5 my-4 px-0">
                {techs.map(e=>
                    <div className=" d-flex flex-column justify-content-center align-items-center textIcons mt-4">
                        <img src={e.icon} alt="" className="imgIcon"/>
                        <b>{e.name}</b>
                    </div>    
                )}
            </div>
        </div>
    )
};

export default Habilidades;