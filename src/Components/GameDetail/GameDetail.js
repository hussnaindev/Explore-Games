import React from 'react'
import './GameDetail.css'
import { Rating } from '@mui/material'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import {Carousels} from 'react-material-ui-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import Button from "@mui/material/Button";

const Genres = ({ game }) => {
    const genres = game.genres.map((genre) => genre.name);
    console.log(genres);
    return genres.map((genre) => <div key={genre}> {genre} </div>);
  };

  const Platforms = ({ game }) => {
    const platforms = game.platforms.map((p) => p.platform.name);
    console.log(platforms);
    return platforms.map((platform) => <div key={platform}> {platform} </div>);
  };

const GameDetail = ({games}) =>
{
    console.log(games)
    return(
        <><div className="GameDetail-Container">
            <div className="GameDetail">
                <div className="GameHeader">
                    <img className="game-img" src={img1} alt="game img" height="325"></img>
                </div>
                <div className="specs">
                     <div className="specs-column1">
                         <h2>Red Dead Redemption</h2>
                      </div>
                    <div className="specs-column2">
                        <div className="genres">
                            <h2>Genre</h2>
                            {games.map(game => <Genres game={game}/>)}
                        </div>
                        <div className="Rating">
                            <h2>Rating</h2>
                            <Rating
                                className="rating"
                                name="read-only"
                                precision={0.5}
                                value={4}
                                size="small">
                            </Rating>
                        </div>
                        <div className="ReleaseDate">
                            <h2>Release Date</h2>
                            <h4>23-09-2021</h4>
                        </div>

                    </div>
                    <div className="specs-column3">  
                       <div className="Platforms">
                            <h2>Platforms</h2>
                            <h5>PC</h5>
                            <h5>XBOX</h5>
                            <h5>PlayStation</h5>
                        </div>
                        <div className="available">
                            <h2>Available on</h2>
                            <h5>Steam</h5>
                            <h5>Epic Games</h5>
                            <h5>Riot Games</h5>
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
                    <Carousel className="game-page-carousel" interval="3000" infiniteLoop="true" autoPlay="true">
                        <img src={img1} alt="screenshot" />
                        <img src={img2} alt="screenshot" />
                        <img src={img3} alt="screenshot" />
                    </Carousel>
                </div>

                <div className="downloadButton">
                    <Button color="primary" variant="outlined" endIcon={<DownloadIcon />}>
                        Download
                    </Button>
                </div>

            </div>

        </div>
       </>

    )
}

export default GameDetail