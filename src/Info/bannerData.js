import imageOneDesktop from '../img/banerOne.png'
import mobileBannerOne from '../img/mobileBannerOne.png'
import portadaOne from '../img/imgPortadaOne.png'

import imageTwoDesktop from '../img/banerTwo.png'
import mobileBannerTwo from '../img/mobileBannerTwo.png'
import portadaTwo from '../img/imgPortadaTwo.png'

import imageThreeDesktop from '../img/banerThree.png'
import mobileBannerThree from '../img/mobileBannerThree.png'
import portadaThree from '../img/imgPortadaThree.png'


export const bannerInfo = [
    {
        id: 3,
        imageDesktop: imageThreeDesktop,
        imageMobile: mobileBannerThree,
        imagePortada: portadaThree,
        subTitulo: 'WEB ESTÁTICA',
        titulo: 'Invitación mis 15',
        descripcion: 'Carta de invitación web para fiesta de 15 años',
        tecnologiasFront: ['NextJS', 'Tailwind'],
        tecnologiasBack: [],
        link: 'https://invitacion-ariel-5ipetmwgj-mauroagustins-projects.vercel.app/'
    },
    {
        id: 2,
        imageDesktop: imageTwoDesktop,
        imageMobile: mobileBannerTwo,
        imagePortada: portadaTwo,
        subTitulo: 'APLICACIÓN WEB',
        titulo: 'POKEDEX ',
        descripcion: 'Visualización, buscador y creador de pokemones',
        tecnologiasFront: ['ReactJS', 'Redux', 'CSS'],
        tecnologiasBack: ['PostgreSQL', 'Express', 'NodeJs'],
        link: ''
    },
    {
        id: 1,
        imageDesktop: imageOneDesktop,
        imageMobile: mobileBannerOne,
        imagePortada: portadaOne,
        subTitulo: 'ECOMMERCE',
        titulo: 'SNOWPANDA',
        descripcion: 'Ventas de tablas y accesorios para Snowboard',
        tecnologiasFront: ['ReactJS', 'Redux', 'Bootstrap'],
        tecnologiasBack: ['PostgreSQL', 'Express', 'NodeJs'],
        link: ''

    }
]