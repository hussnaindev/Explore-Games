/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import HomePage from './Components/HomePage/HomePage'
import GamePage from './Components/GamePage/GamePage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {useState} from 'react'
import './App.css'

const App = () =>
{
  const [games,setGames] = useState([])
  const [searchRes,setSearchRes] = useState([])
  const [mode,setMode] = useState('ShowGames')
  const [open, setOpen] = useState(true)
  const [currentGame,setCurrentGame] = useState([])

  console.log("check games updated or not",games)
  return(
    
    <>
     <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,300&display=swap" rel="stylesheet"></link>
      <link href="//db.onlinewebfonts.com/c/8083df1227dfa77541e97424193d3371?family=Brutal+Type" rel="stylesheet" type="text/css"></link>
    </head>

    <Router>
      <Routes>
        <Route path="/" element={<HomePage games={games} setGames={setGames} searchRes={searchRes} setSearchRes={setSearchRes} mode={mode} setMode={setMode} open={open} setOpen={setOpen} currentGame={currentGame} setCurrentGame={setCurrentGame} />}></Route>
        <Route path="/Home" element={<HomePage games={games} setGames={setGames} searchRes={searchRes} setSearchRes={setSearchRes} mode={mode} setMode={setMode} open={open} setOpen={setOpen} currentGame={currentGame} setCurrentGame={setCurrentGame}/>}></Route>
        <Route path="/Game" element={<GamePage games={games} setGames={setGames} searchRes={searchRes} setSearchRes={setSearchRes} mode={mode} setMode={setMode} open={open} setOpen={setOpen} currentGame={currentGame} setCurrentGame={setCurrentGame}/>}></Route>
      </Routes>
    </Router></>
       
  )
}

export default App