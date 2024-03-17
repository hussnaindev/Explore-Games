/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../Navbar/navbar'
import ShowGames from '../ShowGames/ShowGames'
import GamesSlides from '../GameSlides/GamesSlides'
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import './HomePage.css'
import GameDetail from '../GameDetail/GameDetail'
import MediaQuery from "react-responsive";

const HomePage = ({ games,setGames,searchRes,setSearchRes,mode,setMode,open,setOpen,currentGame,setCurrentGame} ) =>
{
  window.scroll({behavior: 'smooth' })
  const [page,setPage] = useState(1)
  const [refresh,setRefresh] = useState(1)
  const [loading,setLoading] = useState(true)


  const handleChange = (event, value) => {
    setPage(value);
    setLoading(true)
    window.scrollTo(0,0)
    setRefresh(refresh+1)
  };

  useEffect( async () => 
  {
    FS('setIdentity', {
      uid: '125',
      properties: {
        displayName: 'John Smith',
        email: 'johnsmith125@gmail.com',
        reviewsWritten: 14
      }
    });  /* eslint-disable */
    const gamesInDb = await axios.get(`https://api.rawg.io/api/games?key=c386a06690c748d297c21d874887883b&page=${page}`)
    await setGames(gamesInDb.data.results)
    setLoading(false)
  },[refresh])
  

  if(mode==="ShowGames")
  {
    return(
      <>
      {loading ? 
      <div className="loading-icon"><CircularProgress  /></div>
      :
        <div className="App">
        <div className="nav-and-slide">
             <MediaQuery query='(min-width: 950px)'>
             <Navbar games={games} setGames={setGames} searchRes={searchRes} setSearchRes={setSearchRes} mode={mode} setMode={setMode} setOpen={setOpen}/>
             </MediaQuery>
             <GamesSlides games={games} />
        </div>
        <ShowGames games={games} searchRes={searchRes} mode={mode}  setMode={setMode} open={open} setOpen={setOpen} currentGame={currentGame} setCurrentGame={setCurrentGame}/>
        <div className="Pagination">
            <Pagination count={800} page={page} onChange={handleChange} variant="outlined" size="large"/>
        </div>
  </div>}
   
       </>
   )
  }


  else if(mode==="GameDetails")
  {
    return(
      <>
       <MediaQuery query='(min-width: 950px)'>
             <Navbar games={games} setGames={setGames} searchRes={searchRes} setSearchRes={setSearchRes} mode={mode} setMode={setMode} setOpen={setOpen}/>
        </MediaQuery>
    
      <GameDetail currentGame={currentGame}/>
      </>

    )
   
  }

  else if(mode==="SearchResult")
  {
    return(
      <div className="App">
        <Navbar games={games} setGames={setGames} searchRes={searchRes} setSearchRes={setSearchRes} mode={mode} setMode={setMode} setOpen={setOpen}/>
        <ShowGames games={games} searchRes={searchRes} mode={mode} setMode={setMode} open={open} setOpen={setOpen} currentGame={currentGame} setCurrentGame={setCurrentGame}/>
        <div className="Pagination">
        </div>
    </div>

    )
     
  }
 
}

export default HomePage
