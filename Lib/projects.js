import { shortLorem } from "./lorem"
import poker from '../public/images/PokerStill.png'
import polukoshkoGif from '../public/images/Polukoshko_Gif.gif'
import polukoshkoStill from '../public/images/Polukoshko_still.png'
import baseballStill from '../public/images/baseballGrapherScreenShot.png'

export const websites = [

    {
        title: 'Dr Polukoshko, Optometrist',
        description: `I set out to make a Texas Holdem app because I wanted to be able to play friendly poker games with my friends with virtual chips and no hassle.  It was so much fun to make.  The game logic was a wonderfully complex challenge.  I also enjoyed writing tests for the logic as it was a great way to be certain that the game logic was remaining rock solid throughout the development process.`,
        // gif: '/_next/image?url=%2Fimages%2FDrPolukoshkoOptometrist-ezgif.com-optimize.gif&w=640&q=75',
        gif: polukoshkoGif,
        gifSrcSet: '/_next/image?url=%2Fimages%2FDrPolukoshkoOptometrist-ezgif.com-optimize.gif&w=384&q=75 1x, /_next/image?url=%2Fimages%2FDrPolukoshkoOptometrist-ezgif.com-optimize.gif&w=640&q=75 2x',
        image: polukoshkoStill,
        imgSrcSet: '/_next/image?url=%2Fimages%2FPolukoshko_still.png&w=384&q=75 1x, /_next/image?url=%2Fimages%2FPolukoshko_still.png&w=640&q=75 2x',
        skills: [],
        techs: ['Next.js', 'react-scroll', 'react-burger-menu', 'react-google-maps', 'framer-motion','nuka-carousel', 'CSS', 'HTML' ],
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
        description: `I set out to make a Texas Holdem app because I wanted to be able to play friendly poker games with my friends with virtual chips and no hassle.  It was so much fun to make.  The game logic was a wonderfully complex challenge.  I also enjoyed writing tests for the logic as it was a great way to be certain that the game logic was remaining rock solid throughout the development process.`,
        gif: '',
        gifSrcSet: '/_next/image?url=%2Fimages%2FDrPolukoshkoOptometrist-ezgif.com-optimize.gif&w=384&q=75 1x, /_next/image?url=%2Fimages%2FDrPolukoshkoOptometrist-ezgif.com-optimize.gif&w=640&q=75 2x',
        image: poker,
        imgSrcSet: '/_next/image?url=%2Fimages%2FPolukoshko_still.png&w=384&q=75 1x, /_next/image?url=%2Fimages%2FPolukoshko_still.png&w=640&q=75 2x',
        skills: [],
        techs: [],
        github: '',
        githubServer: '',
        githubClient: '',
        alt:'preview of the polukoshko website',
        link: 'https://poker-taupe-one.vercel.app/'
    },
    {
        title: `Mike's Nerdle!`,
        description: `I set out to make a Texas Holdem app because I wanted to be able to play friendly poker games with my friends with virtual chips and no hassle.  It was so much fun to make.  The game logic was a wonderfully complex challenge.  I also enjoyed writing tests for the logic as it was a great way to be certain that the game logic was remaining rock solid throughout the development process.`,
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
        description: shortLorem+shortLorem+shortLorem,
        gif: '',
        gifSrcSet: '',
        image: baseballStill,
        imgSrcSet: "/_next/image?url=%2Fimages%2FbaseballGrapherScreenShot.png&w=384&q=75 1x, /_next/image?url=%2Fimages%2FbaseballGrapherScreenShot.png&w=640&q=75 2x",
        skills: [],
        techs: [],
        github: 'https://github.com/mseaman26/Baseball-Grapher',
        alt: `preview of Mike's Wordle!`,
        link: 'https://baseball-grapher.herokuapp.com/'
    }, 
]

export const projects = [websites[0],games[1], websites[1], otherProjects[0]]
