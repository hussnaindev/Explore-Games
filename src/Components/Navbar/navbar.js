import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Search from '../Search/Search';
import './Navbar.css';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar({ games, setGames, searchRes, setSearchRes, mode, setMode, setOpen }) {
    const searchByCategory = (category) => {
        const searchResult = []
        games.forEach(game => game.genres.forEach(genre => {
            if (genre.name.toLowerCase() === category.toLowerCase()) {
                searchResult.push(game)
            }
        }))
        setSearchRes(searchResult)
        setOpen(true)
        setMode('SearchResult')
    }

    return (
        <Box className="Navbar" sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar className="toolbar">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setMode("ShowGames")}
                    >
                        <HomeIcon />
                    </IconButton>
                    <Button color="inherit" className="cateButton" onClick={() => searchByCategory('Action')}><p>Action</p></Button>
                    <Button color="inherit" className="cateButton" onClick={() => searchByCategory('Adventure')}><p>Adventure</p></Button>
                    <Button color="inherit" className="cateButton" onClick={() => searchByCategory('Racing')}><p>Racing</p></Button>
                    <Button color="inherit" className="cateButton" onClick={() => searchByCategory('Simulation')}><p>Simulation</p></Button>
                    <Button color="inherit" className="cateButton" onClick={() => searchByCategory('RPG')}><p>RPG</p></Button>
                    <Button color="inherit" className="cateButton" onClick={() => searchByCategory('Shooter')}><p>Shooting</p></Button>
                    <Button color="inherit" className="cateButton" onClick={() => searchByCategory('Puzzle')}><p>Puzzle</p></Button>
                    <Search className="Search" games={games} setGames={setGames} searchRes={searchRes} setSearchRes={setSearchRes} mode={mode} setMode={setMode} setOpen={setOpen} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
