import React, { useState } from 'react'
import './GameDetail.css'
import { Rating } from '@mui/material'
import play from './play.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import IconButton from '@mui/material/IconButton';
import axios from 'axios'
import { useEffect } from 'react'

const Genres = ({ game }) => {
    const genres = game.genres.map((genre) => genre.name);
    return genres.map((genre) => <span key={genre}> {genre} | </span>);
};

const Platforms = ({ game }) => {
    const platforms = game.platforms.map((p) => p.platform.name);
    return platforms.map((platform) => <span key={platform}> {platform} | </span>);
};

const Stores = ({ game }) => {
    const stores = game.stores.map((s) => s.store.name);
    return stores.map((store) => <span key={store}> {store} | </span>);
};

const Screenshots = ({ game }) => {
    const screenshots = game.short_screenshots.map(ss => ss.image)
    return screenshots.map(screenshot => <img src={screenshot} alt="game image" />)
}

const GameDetail = ({ currentGame }) => {
    const [video, setVideo] = useState("")
    const [playVideo, setPlayVideo] = useState(false)

    const handleClick = () => {
        setPlayVideo(true)
    }

    useEffect(async () => {
        const url = `${process.env.REACT_APP_YOUTUBE_API_BASE_URL}/search?part=snippet&maxResults=1&q=${currentGame.name}+game+trailer&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
        const response = await axios.get(url);
        const videoId = response.data.items[0].id.videoId;
        const videoURL = `${process.env.REACT_APP_YOUTUBE_BASE_URL}/embed/${videoId}?autoplay=1&hd=1`;
        setVideo(videoURL);
    }, [])

    const screenshots = currentGame.short_screenshots.map(ss => ss.image)
    return (
        <><div className="GameDetail-Container">
            <div className="GameDetail">
                <div className="GameHeader">
                    {playVideo ?
                        <div>
                            <iframe className="game-img" src={video}> </iframe>
                        </div>
                        :
                        <>
                            <div className="game-shade"></div>
                            <img className="game-img" src={currentGame.background_image} alt="game img"></img>
                            <div className="Play-icon"><IconButton onClick={handleClick} size="large"><img src={play} /></IconButton></div>
                        </>
                    }

                </div>

                <div className="specs">
                    <div className="specs-column1">
                        <h2>{currentGame.name}</h2>
                    </div>
                    <div className="specs-column2">
                        <div className="genres">
                            <h2>Genre</h2>
                            <Genres game={currentGame} />
                        </div>
                        <div className="Rating">
                            <h2>Rating</h2>
                            <Rating
                                className="rating"
                                name="read-only"
                                precision={0.5}
                                value={currentGame.rating}
                                size="small">
                            </Rating>
                        </div>
                        <div className="ReleaseDate">
                            <h2>Release Date</h2>
                            {currentGame.released}
                        </div>

                    </div>
                    <div className="specs-column3">
                        <div className="Platforms">
                            <h2>Platforms</h2>
                            <Platforms game={currentGame} />
                        </div>
                        <div className="Blank-div"></div>
                        <div className="available">
                            <h2>Available on</h2>
                            <Stores game={currentGame} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
            <div className="screenshot-container">
                <div className="screenshots">
                    <div className="featured_container">
                        <div className="screenshot_div">
                            <p className="featured_games">ScreenShots</p>
                        </div>
                    </div>
                    <div className="screenshot-pics">
                        <div className="ss-sub-div">
                            <Carousel className="game-page-carousel" interval="3000" infiniteLoop="true" autoPlay="true">
                                {screenshots.map(screenshot => <img src={screenshot} alt="game image" />)}
                            </Carousel>

                        </div>

                    </div>

                    {/* <div className="downloadButton">
                    <Button color="primary" variant="outlined" endIcon={<DownloadIcon />}>
                        Download
                    </Button>
                </div> */}

                </div>


            </div>
        </>

    )
}

export default GameDetail