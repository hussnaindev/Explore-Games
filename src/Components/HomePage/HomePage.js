/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../Navbar/navbar'
import ShowGames from '../ShowGames/ShowGames'
import GamesSlides from '../GameSlides/GamesSlides'
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom'
import './HomePage.css'
import scroll from 'react-scroll'

const HomePage = ({ games,setGames,searchRes,setSearchRes,mode,setMode,open,setOpen,currentGame,setCurrentGame} ) =>
{
  window.scroll({behavior: 'smooth' })
  const [page,setPage] = useState(1)
  const [refresh,setRefresh] = useState(1)
  const [loading,setLoading] = useState(true)


  const handleChange = (event, value) => {
    setPage(value);
    setLoading(true)
    console.log("check",loading)
    window.scrollTo(0,0)
    setRefresh(refresh+1)
  };

  useEffect( async () => 
  {
    try{
      const gamesInDb = await axios.get(`https://api.rawg.io/api/games?key=c386a06690c748d297c21d874887883b&page=${page}`)
      console.log(gamesInDb.data.results)
      await setGames(gamesInDb.data.results)
      console.log("useEffect working on each render ")
      setLoading(false)
    }

    catch(error)
    {
      console.log(error)   
    }

  },[refresh])
  

  if(mode==="ShowGames")
  {
    return(
      <>
      {loading ? <CircularProgress />:
        <div className="App">
        <Navbar games={games} setGames={setGames} searchRes={searchRes} setSearchRes={setSearchRes} mode={mode} setMode={setMode} setOpen={setOpen}/>
        <GamesSlides games={games} />
        <ShowGames games={games} searchRes={searchRes} mode={mode} open={open} setOpen={setOpen} currentGame={currentGame} setCurrentGame={setCurrentGame}/>
        <div className="Pagination">
            <Link to={{pathname:"/Game",state:{value:123}}}>Game Page</Link>
            <Pagination count={50} page={page} onChange={handleChange} variant="outlined" size="large"/>
        </div>
  </div>}
   
       </>
   )
  }
 
  else if(mode==="SearchResult")
  {
    return(
      <div className="App">
        <Navbar games={games} setGames={setGames} searchRes={searchRes} setSearchRes={setSearchRes} mode={mode} setMode={setMode} setOpen={setOpen}/>
        <ShowGames games={games} searchRes={searchRes} mode={mode} open={open} setOpen={setOpen} currentGame={currentGame} setCurrentGame={setCurrentGame}/>
        <div className="Pagination">
      
          <Pagination count={50} page={page} onChange={handleChange} variant="outlined" shape="rounded" size="large"/>

        </div>
    </div>

    )
     
  }
 
}

export default HomePage
