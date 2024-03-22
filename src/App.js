/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import HomePage from './Components/HomePage/HomePage'
import { useState } from 'react'
import './App.css'

const App = () => {
    const [games, setGames] = useState([])
    const [searchRes, setSearchRes] = useState([])
    const [mode, setMode] = useState('ShowGames')
    const [open, setOpen] = useState(true)
    const [currentGame, setCurrentGame] = useState({})

    return (

        <>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            </head>
            <HomePage games={games} setGames={setGames} searchRes={searchRes} setSearchRes={setSearchRes} mode={mode} setMode={setMode} open={open} setOpen={setOpen} currentGame={currentGame} setCurrentGame={setCurrentGame} />
        </>
    )
}

export default App
