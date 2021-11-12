import React from 'react'
import GameDetail from '../GameDetail/GameDetail'
import Navbar from '../Navbar/navbar'
import ShowGames from '../ShowGames/ShowGames'

const GamePage = ({ games,setGames,searchRes,setSearchRes,mode,setMode,open,setOpen,currentGame,setCurrentGame} ) =>
{
    if(mode==="ShowGames")
    {
        return(
            <>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            </head>
            <div>
                <Navbar games={games} setGames={setGames} searchRes={searchRes} setSearchRes={setSearchRes} mode={mode} setMode={setMode} setOpen={setOpen} />
                <GameDetail games={games} />
            </div>
            </>
        )}

    else if (mode==="SearchResult")
    {
        return(
            <div>
            <Navbar games={games} setGames={setGames} searchRes={searchRes} setSearchRes={setSearchRes} mode={mode} setMode={setMode} setOpen={setOpen} />
            <ShowGames games={games} searchRes={searchRes} mode={mode} open={open} setOpen={setOpen} currentGame={currentGame} setCurrentGame={setCurrentGame}></ShowGames>
            </div>
        )

    }

}

export default GamePage