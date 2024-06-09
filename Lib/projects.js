import { shortLorem } from "./lorem"
import poker from '../public/images/PokerStill.png'

export const websites = [

    {
        title: 'Dr Polukoshko, Optometrist',
        description: shortLorem,
        gif: '/_next/image?url=%2Fimages%2FDrPolukoshkoOptometrist-ezgif.com-optimize.gif&w=640&q=75',
        gifSrcSet: '/_next/image?url=%2Fimages%2FDrPolukoshkoOptometrist-ezgif.com-optimize.gif&w=384&q=75 1x, /_next/image?url=%2Fimages%2FDrPolukoshkoOptometrist-ezgif.com-optimize.gif&w=640&q=75 2x',
        image: '/_next/image?url=%2Fimages%2FPolukoshko_still.png&w=640&q=75',
        imgSrcSet: '/_next/image?url=%2Fimages%2FPolukoshko_still.png&w=384&q=75 1x, /_next/image?url=%2Fimages%2FPolukoshko_still.png&w=640&q=75 2x',
        skills: [],
        techs: [],
        github: '',
        alt:'preview of the polukoshko website',
        link: 'https://drpolukoshko.com/'
    },
    {
        title: 'Casa Susana',
        description: `A vibrant website for both locations of Casa Susana Mexican Cantina.  This site features many dynamic components including online ordering with shopping cart and checkout, stylish menu pages rendered from JSON data, and a sleek burger menu with animation.  I did all the building of this website, following a design made by someone else.`,
        gif: '/_next/image?url=%2Fimages%2FCasaSusana-ezgif.com-optimize.gif&w=640&q=75',
        gifSrcSet: '/_next/image?url=%2Fimages%2FCasaSusana-ezgif.com-optimize.gif&w=384&q=75 1x, /_next/image?url=%2Fimages%2FCasaSusana-ezgif.com-optimize.gif&w=640&q=75 2x',
        image: '/_next/image?url=%2Fimages%2Fcasa_still.png&w=640&q=75',
        imgSrcSet: "/_next/image?url=%2Fimages%2Fcasa_still.png&w=384&q=75 1x, /_next/image?url=%2Fimages%2Fcasa_still.png&w=640&q=75 2x",
        skills: [],
        techs: ['Vite', 'Tailwind.css', 'react-scroll', 'react-burger-menu', 'useContext hook' ],
        github: '',
        alt: 'preview of the Casa Susana website',
        link: 'https://mex-restaurant.vercel.app/'
    },
]

export const games = [
    {
        title: `Mike's Friendly Poker`,
        description: shortLorem,
        gif: '',
        gifSrcSet: '/_next/image?url=%2Fimages%2FDrPolukoshkoOptometrist-ezgif.com-optimize.gif&w=384&q=75 1x, /_next/image?url=%2Fimages%2FDrPolukoshkoOptometrist-ezgif.com-optimize.gif&w=640&q=75 2x',
        image: poker,
        imgSrcSet: '/_next/image?url=%2Fimages%2FPolukoshko_still.png&w=384&q=75 1x, /_next/image?url=%2Fimages%2FPolukoshko_still.png&w=640&q=75 2x',
        skills: [],
        techs: [],
        github: '',
        alt:'preview of the polukoshko website',
        link: 'https://poker-taupe-one.vercel.app/'
    },
    {
        title: `Mike's Nerdle!`,
        description: shortLorem,
        gif: '/_next/image?url=%2Fimages%2FnerdleGif.gif&w=640&q=75',
        gifSrcSet: '/_next/image?url=%2Fimages%2FnerdleGif.gif&w=384&q=75 1x, /_next/image?url=%2Fimages%2FnerdleGif.gif&w=640&q=75 2x',
        image: '/_next/image?url=%2Fimages%2FnerdleStill.png&w=640&q=75',
        imgSrcSet: "/_next/image?url=%2Fimages%2FnerdleStill.png&w=384&q=75 1x, /_next/image?url=%2Fimages%2FnerdleStill.png&w=640&q=75 2x",
        skills: [],
        techs: [],
        github: 'https://github.com/mseaman26/Mike-s-Nerdle',
        alt: `preview of Mike's Nerdle!`,
        link: 'https://mseaman26.github.io/Mike-s-Nerdle/'
    },
    {
        title: `Mike's Wordle!`,
        description: shortLorem,
        gif: '/_next/image?url=%2Fimages%2FwordleGif.gif&w=640&q=75',
        gifSrcSet: '/_next/image?url=%2Fimages%2FwordleGif.gif&w=384&q=75 1x, /_next/image?url=%2Fimages%2FwordleGif.gif&w=640&q=75 2x',
        image: '/_next/image?url=%2Fimages%2FwordleStill.png&w=640&q=75',
        imgSrcSet: "/_next/image?url=%2Fimages%2FwordleStill.png&w=384&q=75 1x, /_next/image?url=%2Fimages%2FwordleStill.png&w=640&q=75 2x",
        skills: [],
        techs: [],
        github: 'https://github.com/mseaman26/Mike-s-Wordle',
        alt: `preview of Mike's Wordle!`,
        link: 'https://mseaman26.github.io/Mike-s-Wordle/'
    },
]

export const otherProjects = [
    {
        title: `Baseball Grapher`,
        description: shortLorem,
        gif: '',
        gifSrcSet: '',
        image: '/_next/image?url=%2Fimages%2FbaseballGrapherScreenShot.png&w=640&q=75',
        imgSrcSet: "/_next/image?url=%2Fimages%2FbaseballGrapherScreenShot.png&w=384&q=75 1x, /_next/image?url=%2Fimages%2FbaseballGrapherScreenShot.png&w=640&q=75 2x",
        skills: [],
        techs: [],
        github: 'https://github.com/mseaman26/Baseball-Grapher',
        alt: `preview of Mike's Wordle!`,
        link: 'https://baseball-grapher.herokuapp.com/'
    }, 
]
