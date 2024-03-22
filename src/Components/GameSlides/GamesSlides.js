import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './GamesSlides.css';

const Slides = ({ game }) => {
    return (

        <div className="single-slide">
            <img className="slide-img" src={game.background_image}></img>
            <div className="shade"></div>
            <p className="name">{game.name}</p>
        </div>

    )
}

const GamesSlides = ({ games }) => {

    if (games) {
        return (
            <div className="Carousel">
                <Carousel interval="3000" infiniteLoop="true" autoPlay="true" useKeyboardArrows="true" autoFocus="true">
                    {games.map(game => <Slides game={game} />)}
                </Carousel>

            </div>

        )
    }

    return null

}

export default GamesSlides
