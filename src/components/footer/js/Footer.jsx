import react from 'react';
import '../style/Footer.css'
import logoIso from '../../../../public/Logo/logo+iso.png'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className='dataline mx-auto'>
            <div className='d-flex justify-content-between align-items-center mt-3 flex-lg-column justify-content-lg-center text-center'>
                <img src={logoIso} alt="" className='imglogoIso' />
                <div className='d-flex flex-column flex-lg-row'>
                    <a className='linkRedes' href="#">< AiOutlineInstagram className='IconRedes'/> @_aguspasten_</a>
                    <a className='linkRedes' href="#">< AiOutlineGithub className='IconRedes'/> Agustinn-1002</a>
                    <a className='linkRedes' href="#">< AiOutlineLinkedin className='IconRedes'/> Mauro Agustin Pasten</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;