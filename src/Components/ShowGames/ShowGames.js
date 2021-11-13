import React from "react";
import SingleGame from "../SingleGame/SingleGame";
import "./ShowGames.css";

const ShowGames = ({ games, searchRes, mode,setMode, open, setOpen,currentGame,setCurrentGame }) => {
    console.log(mode);
    let timeout = 1000

    if (mode === "SearchResult") {
        
        return (
            <div className="ShowGames_Container">
                <div className="featured_container">
                    <div className="featured_div">
                        <p className="featured_games">Search Result</p>
                    </div>
                </div>
                <div className="ShowGames">
                    {searchRes.map((game) => (
                        <SingleGame game={game} open={open} setMode={setMode} timeout={timeout+=500} currentGame={currentGame} setCurrentGame={setCurrentGame} />
                    ))}
                </div>
            </div>
        );
    } else if (mode === "ShowGames") {
        return (
           
            <div className="ShowGames_Container">
                <div className="featured_container">
                    <div className="featured_div">
                        <p className="featured_games">Featured Games</p>
                    </div>
                </div>
                <div className="ShowGames">
                    {games.map((game) => (
                        <SingleGame game={game} open={open} setMode={setMode} timeout={timeout+=500} currentGame={currentGame} setCurrentGame={setCurrentGame} />
                    ))}
                </div>
            </div>
        );
    }

    return null;
};

export default ShowGames;
