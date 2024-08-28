import '../style/Footer.css'
import logoIso from '../../../../public/Logo/logo+iso.png'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className='dataline mx-auto'>
            <div className='d-flex justify-content-evenly align-items-center mt-3 flex-lg-column justify-content-lg-center text-center'>
                <a href="#Inicio"><img src={logoIso} alt="" className='imglogoIso' /></a>
                <div className='d-flex flex-column flex-lg-row align-items-start'>
                    <a className='linkRedes' href="https://www.instagram.com/_aguspasten_/">< AiOutlineInstagram className='iconRedes'/> <b>@_aguspasten_</b></a>
                    <a className='linkRedes' href="https://github.com/Agustinn-1002">< AiOutlineGithub className='iconRedes'/><b> Agustinn-1002</b></a>
                    <a className='linkRedes' href="https://www.linkedin.com/in/mauro-agustin-pasten-68a39b289/">< AiOutlineLinkedin className='iconRedes'/> <b>Mauro Agustin Pasten</b></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;