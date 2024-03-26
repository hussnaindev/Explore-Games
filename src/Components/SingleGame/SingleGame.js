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

const SingleGame = ({ game, open, setMode, timeout, currentGame, setCurrentGame }) => {

    const handleEvent = () => {
        setCurrentGame(game)
        setMode("GameDetails")
        window.scrollTo(0, 0)
    }

    return (
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
    );
};

export default SingleGame;  
