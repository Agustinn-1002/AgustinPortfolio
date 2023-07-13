import imageOneDesktop from '../img/banerOne.png'
import mobileBannerOne from '../img/mobileBannerOne.png'
import portadaOne from '../img/imgPortadaOne.png'

import imageTwoDesktop from '../img/banerTwo.png'
import mobileBannerTwo from '../img/mobileBannerTwo.png'
import portadaTwo from '../img/imgPortadaTwo.png'


export const bannerInfo = [
    {
        id:1,
        imageDesktop: imageOneDesktop,
        imageMobile: mobileBannerOne,
        imagePortada: portadaOne,
        subTitulo: 'ECOMMERCE',
        titulo: 'SNOWPANDA',
        descripcion: 'Ventas de tablas y accesorios para Snowboard ',
        tecnologiasFront: ['ReactJS', 'Redux', 'Bootstrap'],
        tecnologiasBack: ['PostgreSQL', 'Express', 'NodeJs'],
        link:'https://pf-10a-bhm9.vercel.app/'

    },
    {
        id:2,
        imageDesktop: imageTwoDesktop,
        imageMobile: mobileBannerTwo,
        imagePortada: portadaTwo,
        subTitulo: 'APLICACIÓN WEB',
        titulo: 'POKEDEX ',
        descripcion: 'Visualización, buscador y creador de pokemones ',
        tecnologiasFront: ['ReactJS', 'Redux', 'CSS'],
        tecnologiasBack: ['PostgreSQL', 'Express', 'NodeJs'],
        link: 'https://pi-front-end-wheat.vercel.app/'
    }
]