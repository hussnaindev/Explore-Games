import React, { useState } from "react"
import './Search.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = ({games,setGames,searchRes,setSearchRes,mode,setMode,setOpen}) =>
{
    const [inputValue,setInputValue] = useState('')

    const inputHandler = (event) =>
    {
        setInputValue(event.target.value)
    }

    const searchGame = (event) =>
    {
        event.preventDefault()
        const searchResult = games.filter(game => game.name.toLowerCase() === inputValue.toLowerCase())
        setSearchRes(searchResult)
        setOpen(true)
        setMode('SearchResult')
    }

    return(
        <>
        <form className="searchForm" onSubmit={searchGame}>
            <input className="searchInput" value={inputValue} placeholder="Seach Game..." onChange={inputHandler}></input>
            <button className="submitButton" type="submit"><SearchRoundedIcon /></button>
        </form>
        </>
    )
}

export default Search
