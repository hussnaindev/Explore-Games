/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/*import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@material-ui/core'
import './GamesSlides.css'

const GamesSlides = ({games}) =>
{
    console.log("games in slides",games)
    if(games!=='')
    {
        return (
            <div className="GameSlides">
                 <Carousel>
                  {
                     games.map( game => <Item game={game} /> )
                  }
                 </Carousel>

            </div>
           
        )
    }

    return null
    
}

const Item = ({game}) =>
{
    console.log(game)
    return (
            <Paper className="Paper">
                <img width="500px" alt="game image" src={game.background_image}/>
                <Typography>{game.name}</Typography>
            </Paper>
        
    )
}

export default GamesSlides*/
/*
import React from 'react'
import { Carousel } from 'antd';


const GamesSlides = () =>
{
    return(
      <Carousel autoplay>
      <div>
        <h3>Pakistan</h3>
      </div>
      <div>
        <h3>India</h3>
      </div>
      <div>
        <h3>England</h3>
      </div>
      <div>
        <h3>Australia</h3>
      </div>
    </Carousel>
    )
}

export default GamesSlides*/

import React, { Suspense } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './GamesSlides.css';
import Backdrop from '@mui/material/Backdrop';

const Slides = ({game}) =>
{
  return(
      
    <div className="single-slide">
      <img className="slide-img" src={game.background_image}></img>
      <div className="shade"></div>
      <p className="name">{game.name}</p>
    </div>

  )
}

const GamesSlides = ({games}) =>
{

  if(games)
  {
    return(
      <div className="Carousel">
      <Carousel interval="3000" infiniteLoop="true" autoPlay="true" useKeyboardArrows="true" autoFocus="true">
        {games.map(game => <Slides game={game}/>)}
      </Carousel>

      </div>
   
    )
  }

  return null

}

export default GamesSlides
