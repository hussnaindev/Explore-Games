/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActions } from "@mui/material";
import { CardActionArea } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Rating from "@mui/material/Rating";
import "./SingleGame.css";
import { useState } from "react";
import { Grow } from "@mui/material";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const Genres = ({ game }) => {
  const genres = game.genres.map((genre) => genre.name);
  console.log(genres);
  return genres.map((genre) => <span key={genre}> {genre} </span>);
};

const Platforms = ({ game }) => {
  const platforms = game.platforms.map((p) => p.platform.name);
  console.log(platforms);
  return platforms.map((platform) => <span key={platform}> {platform} </span>);
};

const SingleGame = ({ game, open,setMode,timeout, currentGame, setCurrentGame }) => {
    

    const handleEvent = () =>
    {
        setCurrentGame(game)
        console.log("my game",game)
        setMode("GameDetails")
        window.scrollTo(0,0)
    }


  return (
    <Grow in={open} {...(open ? { timeout: timeout} : {})}>
      <div className="SingleGame-Container" onClick={handleEvent}>
      <div className="addShadow" >
        <Card className="SingleGame" >
          <CardActionArea className="CardActionArea">
            <CardMedia
              component="img"
              height="300"
              image={game.background_image}
              alt="game img"
            />
            <CardContent className="CardContent">
              <Typography
                className="game_title"
                gutterBottom
                variant="h8"
                fontFamily="Manrope"
                component="div"
              >
                {game.name}
              </Typography>
              {/* 
                 <Typography gutterBottom variant="h8" component="span">Genre</Typography>
                 <Genres game={game} />
                 <Typography gutterBottom variant="h8" component="div">Ratings: {game.rating}</Typography>
                 <Typography gutterBottom variant="h8" component="span">Platforms: </Typography>
                 <Platforms game={game}/>
                 */}
              <div className="rating_container">
                <Rating
                  className="rating"
                  name="read-only"
                  precision={0.5}
                  value={game.rating}
                  size="small"
                />
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions className="CardAction">
            <Button onClick={handleEvent} variant="outlined" endIcon={<SearchIcon />}>
              Explore
            </Button>
          </CardActions>
        </Card>
      </div>
      </div>
    </Grow>
  );
};

export default SingleGame;
